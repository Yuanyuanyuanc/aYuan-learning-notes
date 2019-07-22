import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 }
    ]
  }
});

// 2. Plugins
// app.use({});

console.log('dva: ', dva)
console.log('app: ', app)
console.log(require('./models/products').default)

// 3. Model
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
