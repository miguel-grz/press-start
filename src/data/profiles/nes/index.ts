import type { ConsoleProfileModule } from '../types'
import { copy } from './copy'
import { profile } from './profile'

export default { profile, copy } satisfies ConsoleProfileModule
