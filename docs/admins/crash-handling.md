# Crash Handling

Crashes happen—even in a well-curated modpack like Ashen Legacy. This guide will help players and server admins diagnose and resolve common crash scenarios.

## 🧍 For Players

### 🔁 Crashes on Startup

- **Check RAM**: Allocate at least 8GB (preferably 10–12GB).
- **Use Java 17+**: Required for Minecraft 1.20.1 compatibility.
- **Disable non-packaged components**: Disable anything you may have added to the pack, especially high-res packs and shaders during troubleshooting.
- **Update launchers:** Ensure you’re using the latest version of CurseForge (or your respective lanucher).

### 🧨 Game Crashes When Loading a World

- Corrupted world data:
    - Try loading a backup
    - Delete `level.dat_old` only if you know what you’re doing
- Mod conflict:
    - Look for error lines in `latest.log`
    - Share the crash report for help via Discord or GitHub

### 🪵 Where to Find Logs

- **Logs folder**: `logs/latest.log`
- **Crash reports**: `crash-reports/` folder

Use [Pastebin](https://pastebin.com/) or [GitHub Gist](https://gist.github.com/) to share logs.


## 🌐 For Server Admins

### 🔧 Common Startup Failures

- Missing dependency:
    - Check for mismatched or missing mod versions
        
- Port already in use:
    - Another server may be running; close background Java processes
- Corrupted dimension or player data:
    - Try deleting `data/dimension` folders or specific `playerdata/UUID.dat` entries (make backups first!)
        

### 🧪 Identifying Problem Mods

- Use `spark profiler --timeout 30` if you suspect TPS lag from startup triggers
- Sort crash logs by `Caused by:` entries
- Check `mods/` folder for duplicate or conflicting versions
    

### 🧯 Emergency Admin Tools

- `/cofh tps` or `/forge tps` (if installed) to monitor tick load
- `tick.json` or `dim-rules.json` configs to throttle mod behavior in laggy dimensions
- Run server in offline mode (temporarily) for test debugging

## 📤 Reporting a Crash

If you’re stuck and need help:

1. Locate and upload `latest.log` or `crash-*.txt`
    
2. Describe what you were doing before the crash
    
3. Include pack version and launcher (e.g., CurseForge, Prism)
    
4. Open an issue: [GitHub Issues](https://github.com/your-username/ashen-legacy/issues)
    

We’ll review logs and work with you to reproduce the issue if needed.

---

Stay calm. Backups, logs, and a bit of curiosity will fix most issues in minutes.