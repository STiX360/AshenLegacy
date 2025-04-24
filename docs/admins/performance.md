# Performance Tweaks

Optimising performance for a large, content-heavy modpack like **Ashen Legacy** is key to ensuring smooth gameplay, especially in multiplayer. 

This guide provides practical, high-impact tweaks and recommendations.
## 🔭 View Distance & Simulation Settings

Reducing the number of chunks the server and players interact with is one of the easiest ways to cut down on lag:

- **View Distance**: Considering setting lower. Higher values significantly increase CPU and RAM usage.
    
- **Simulation Distance**: Considering settinglower to limit how far away entities and block ticks are processed.
    

Adjust these in `server.properties`:

```properties
view-distance=18
simulation-distance=12
```

---

## 🌍 Pre-generating the World

Use [Chunk-Pregenerator](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator) to pre-load and save terrain before players begin:

### Benefits:

- Avoids stutter and CPU spikes from real-time generation
    
- Ensures larger structures like YUNG’s Dungeons are fully generated
    

### Usage:

```bash
/pregen start gen radius GenExample CIRCLE 0 0 250
```

This starts a 250 Radius Circle Pregeneration task in your current dimension with the TaskId *'GenExample'*. Further documentation is available [here](https://github.com/TinyModularThings/Chunk-Pregenerator-Issue-Tracker/wiki/Commands).

Run during off-hours or before public launch.

## 📊 Using Spark for Profiling

Install [Spark](https://spark.lucko.me/) to analyze TPS drops, memory use, and entity load:

- Use `/spark profiler` during lag spikes
    
- Analyze data on the web UI: `spark.lucko.me`
    
- Identify mod-related bottlenecks, excessive tile entities, or broken mob farms
    

### Recommended:

- Run a 30-second sample during peak activity
    
- Compare chunk vs entity vs tick impact
    

## 🔁 Automatic Restarts

Long uptime = higher memory usage. Use restart scripts or mods like **FTB Essentials**, **OpenModularServerUtils**, or a panel scheduler (Pterodactyl/AMP) to auto-restart every 6–12 hours.

### Why it matters:

- Frees up RAM from leaked references or excessive caching
    
- Resets mob cap anomalies and garbage collection issues
    
## 💡 Extra Tips

- Use the bundled mods, such as **FerriteCore** for memory and tick optimisations.
    
- Reduce spawn caps in rarely visited dimensions.
    
- Clean up dropped items and entities regularly.
    
- Encourage players to avoid leaving chunkloaders or mob farms running 24/7.
    

With these optimisations, you’ll get a far smoother experience—without sacrificing the ambition or complexity of the Ashen Legacy experience.