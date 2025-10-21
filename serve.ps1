# serve.ps1 — start a simple static server and verify pages
# Usage: Right-click in Explorer and "Run with PowerShell" or run from PowerShell: .\serve.ps1

# Start server in background
Get-Process -Name python* -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Process -FilePath 'C:/Users/geoni/AppData/Local/Microsoft/WindowsApps/python3.11.exe' -ArgumentList '-m','http.server','8000','--directory','c:\Users\geoni\Portfolio-Belmonts\belmonts-portfolio' -WindowStyle Hidden
Start-Sleep -Seconds 1
Write-Output 'Server started on http://localhost:8000'

# Verify pages
$urls = @('index.html','about.html','events.html','members.html','leaders.html')
foreach ($u in $urls) {
    try {
        $r = Invoke-WebRequest -Uri "http://localhost:8000/$u" -UseBasicParsing -TimeoutSec 5
        if ($r.StatusCode -eq 200) { Write-Output "$u -> OK" } else { Write-Output "$u -> HTTP $($r.StatusCode)" }
    } catch {
        Write-Output "$u -> FAIL ($($_.Exception.Message))"
    }
}

Write-Output 'To stop the server: Get-Process -Name python* | Stop-Process -Force'