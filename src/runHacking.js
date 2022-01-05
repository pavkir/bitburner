import { localeHHMMSS } from 'common.ns'

export async function main(ns) {
  ns.tprint(`[${localeHHMMSS()}] Starting runHacking.js`)

  let hostname = ns.getHostname()

  if (hostname !== 'home') {
    throw new Exception('Run the script from home')
  }

  const homeRam = ns.getServerMaxRam('home')

  if (homeRam >= 32) {
    ns.tprint(`[${localeHHMMSS()}] Spawning spider.ns`)
    await ns.run('spider.ns', 1, 'mainHack.js')
    await ns.asleep(1000)
    //ns.tprint(`[${localeHHMMSS()}] Spawning playerServers.ns`)
    //ns.spawn('playerServers.ns', 1)
  } else {
    ns.tprint(`[${localeHHMMSS()}] Spawning spider.ns`)
    ns.spawn('spider.ns', 1, 'mainHack.js')
  }
}

// vim: set ft=javascript :
