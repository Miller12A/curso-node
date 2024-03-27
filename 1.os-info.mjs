import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Informacion del sistema operativo')

console.log('___________________________________')

console.log('Nombre del sistema operativo', platform())

console.log('___________________________________')

console.log('Version del sistema operativo', release())

console.log('___________________________________')

console.log('Arquitectura', arch())

console.log('___________________________________')

console.log('CPUs', cpus())

console.log('___________________________________')

console.log('Memoria libre', freemem() / 1024 / 1024)

console.log('___________________________________')

console.log('Memoria total', totalmem() / 1024 / 1024)

console.log('___________________________________')

console.log('uptime', uptime() / 60 / 60)

