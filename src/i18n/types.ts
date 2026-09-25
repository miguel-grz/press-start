import type { en } from './locales/en'

type Widen<T> = T extends string ? string : { [K in keyof T]: Widen<T[K]> }

/** Every locale must provide exactly the shape of the English source dictionary. */
export type Dictionary = Widen<typeof en>
export type Lang = 'en' | 'es'
