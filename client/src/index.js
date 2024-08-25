import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import reportWebVitals from './reportWebVitals';
// 创建 Apollo Client 实例
const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql', // 替换为你的 GraphQL 服务器地址
  cache: new InMemoryCache(), // 使用内存缓存
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
