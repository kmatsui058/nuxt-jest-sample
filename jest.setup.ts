import dotenv from 'dotenv'
import { config } from '@vue/test-utils'
export default function setup() {
  dotenv.config({ path: '.env' })
  config.stubs.nuxt = { template: '<div />' }
  config.stubs['nuxt-link'] = { template: '<a><slot /></a>' }
  config.stubs['no-ssr'] = { template: '<span><slot /></span>' }
}
