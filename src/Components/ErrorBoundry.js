import React from "react";

export default class ErrorBoundary extends React.Component {
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