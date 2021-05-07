import { postMessage } from './dist/index.js'

const endpoint = process.env.CHANNEL_REALTIME_ENDPOINT
const secret = process.env.CHENNEL_API_TOKEN

const createMsg = async () => {
  const msg = {
    action: 'messages.create',
    params: {
      actions: ['show', 'reply'],
      id: '222',
      body: 'hi there~',
      thread_id: '34232',
      author: {
        id: 'uuuu',
        firstname: 'John',
        lastname: 'Doe',
        screenname: 'John Doe',
        created_at: new Date()
      }
    }
  }
  try {
    const result = await postMessage(msg, endpoint, secret)
    console.log(result.data)
  } catch(e) {
    console.log(e.response.data)
  }
}

createMsg();
