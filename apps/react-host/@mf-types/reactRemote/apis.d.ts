
    export type RemoteKeys = 'reactRemote/App';
    type PackageType<T> = T extends 'reactRemote/App' ? typeof import('reactRemote/App') :any;