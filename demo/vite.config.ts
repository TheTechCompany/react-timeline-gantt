import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: './', //process.env.NODE_ENV == 'production' ? '/react-timeline-gantt/' : './'
})
