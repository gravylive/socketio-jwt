interface SocketioJwtOpts {
    secret: string;
    timeout: number;
    issuer: string;
}

export function authorize(opts: SocketioJwtOpts): Function;
