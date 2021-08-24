export type Constructor<T = {}> = new (...args: any[]) => T;
export type AnyConstructor = Constructor<any>;
export type AbstractConstructor<T = {}> = abstract new (...args: any[]) => T;
export type AnyAbstractConstructor = AbstractConstructor<any>;
