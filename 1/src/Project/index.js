import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from './app/store'
import { Provider } from 'react-redux'
import ProviderScreen from "./Screens/ProviderScreen";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновляем состояние с ошибкой
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Логируем ошибку
    console.error('Uncaught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Отображаем альтернативный UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}


ReactDOM.createRoot( document.getElementById( "app" ) ).render( 
    <ErrorBoundary>
        <Provider store={ store }>
            <ProviderScreen>
                < App />
            </ProviderScreen>
        </Provider>
    </ErrorBoundary>
);
