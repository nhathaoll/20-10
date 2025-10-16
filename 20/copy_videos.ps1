# Copy MP4 videos from D:\2010\video to D:\2010\20\videos
# Usage: Run in PowerShell as Administrator or a user with file permissions

$source = 'D:\2010\video'
$dest = 'D:\2010\20\videos'

# Create destination if not exists
if (-not (Test-Path -Path $dest)) {
    New-Item -ItemType Directory -Path $dest | Out-Null
}

# Copy video files
Get-ChildItem -Path $source -Filter '*.mp4' -File | ForEach-Object {
    $target = Join-Path $dest $_.Name
    Copy-Item -Path $_.FullName -Destination $target -Force
    Write-Host "Copied: $($_.Name) -> $target"
}

Write-Host "Done. Videos copied to $dest" -ForegroundColor Green
