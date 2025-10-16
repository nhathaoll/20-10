# Video assets for 10.html

This folder contains helper script and instructions to place video files used by `10.html`.

Files added:
- `copy_videos.ps1` - PowerShell script to copy all `.mp4` files from `D:\2010\video` to `D:\2010\20\videos`.

How to use:
1. Open PowerShell.
2. Run:

```powershell
Set-Location 'D:\2010\20'
.\copy_videos.ps1
```

3. After running, you'll have the video files in `D:\2010\20\videos` and `10.html` references them as `videos/<name>.mp4`.

If your source folder is different, edit `copy_videos.ps1` and adjust `$source` accordingly.
