declare module 'redux-persist/es/persistStore' {
  import { Store, Action, AnyAction } from 'redux';
  import { PersistorOptions, Persistor } from 'redux-persist/es/types';

  export default function persistStore<S = any, A extends Action<any> = AnyAction>(
    store: Store<S, A>,
    persistorOptions?: PersistorOptions | null,
    callback?: () => any,
  ): Persistor;
}

declare module 'redux-persist/lib/persistStore' {
  export * from 'redux-persist/es/persistStore';
  export { default } from 'redux-persist/es/persistStore';
}
