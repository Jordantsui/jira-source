import React from "react";

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

// ErrorBoundary 对 error 来说，是一个兜底的方案，必须要用 class component

// https://github.com/bvaughn/react-error-boundary
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };
  // React.Component<> 中的第一个类型是 props 的类型，第二个是 state 的类型
  // React.PropsWithChildren 表示将其中的 fallbackRender 和 children 都作为 key

  // 当子组件抛出异常，这里会接收到并且调用
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}