const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')

describe('module', () => {
  let nuxt

  beforeAll(async () => {
    ;({ nuxt } = await setup(loadConfig(__dirname, '../../example')))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    // const context = {}
    const html = await get('/')
    console.log(html)
    expect(html).toContain('page')
  })
})
