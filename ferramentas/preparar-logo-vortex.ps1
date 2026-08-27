param(
  [string]$Origem = "C:\Users\pedro\OneDrive\Documentos\ppp\ppps\logo11.png",
  [string]$Destino = "ativos\vortex-marca.png"
)

Add-Type -AssemblyName System.Drawing

$fonte = [System.Drawing.Bitmap]::new($Origem)
try {
  # A arte está centralizada em fundo branco: esta janela exclui a margem e o pequeno brilho no canto.
  $janela = [System.Drawing.Rectangle]::new(700, 180, 1450, 1200)
  $minX = $janela.Right; $minY = $janela.Bottom; $maxX = $janela.Left; $maxY = $janela.Top

  for ($y = $janela.Top; $y -lt $janela.Bottom; $y++) {
    for ($x = $janela.Left; $x -lt $janela.Right; $x++) {
      $pixel = $fonte.GetPixel($x, $y)
      if ($pixel.R -lt 220 -and $pixel.G -lt 190 -and $pixel.B -gt 60) {
        if ($x -lt $minX) { $minX = $x }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }

  $largura = $maxX - $minX + 1; $altura = $maxY - $minY + 1
  $lado = [Math]::Max($largura, $altura)
  $margem = [int]($lado * 0.08)
  $lado += 2 * $margem
  $origemX = [Math]::Max(0, [int](($minX + $maxX - $lado) / 2))
  $origemY = [Math]::Max(0, [int](($minY + $maxY - $lado) / 2))

  $marca = [System.Drawing.Bitmap]::new(512, 512, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  try {
    for ($saidaY = 0; $saidaY -lt 512; $saidaY++) {
      for ($saidaX = 0; $saidaX -lt 512; $saidaX++) {
        $x = [Math]::Min($fonte.Width - 1, $origemX + [int]($saidaX * $lado / 512))
        $y = [Math]::Min($fonte.Height - 1, $origemY + [int]($saidaY * $lado / 512))
        $pixel = $fonte.GetPixel($x, $y)
        if ($pixel.R -gt 238 -and $pixel.G -gt 238 -and $pixel.B -gt 238) {
          $marca.SetPixel($saidaX, $saidaY, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
          $marca.SetPixel($saidaX, $saidaY, [System.Drawing.Color]::FromArgb($pixel.A, 255, 255, 255))
        }
      }
    }
    $marca.Save((Join-Path (Get-Location) $Destino), [System.Drawing.Imaging.ImageFormat]::Png)
  } finally {
    $marca.Dispose()
  }
} finally {
  $fonte.Dispose()
}
