import { ConnectToInstance, NetworkScope } from "@adpt/cloud";
import { PrimitiveComponent, useImperativeMethods } from "@adpt/core";
import { URL } from "url";

/**
 * Abstract Cloudinary component
 *
 * @remarks
 * This component is used to denote a needed {@link https://cloudinary.com | Cloudinary}
 * service. Users should use a style sheet to subsitute a concrete instance that provides
 * the service.  {@link CloudinaryProvider} is such a component.
 *
 * All implementations of this component should implmenent {@link ConnectToInstance}
 * that provides a `CLOUDINARY_URI` variable of the form `redis://<hostname>:<port>`.
 *
 * @public
 */
export abstract class Cloudinary extends PrimitiveComponent implements ConnectToInstance {
    connectEnv(_scope?: NetworkScope) { return undefined; }
}

export function CloudinaryProvider(props: { uri: string }) {
    const url = new URL(props.uri);
    const key = url.username;
    const secret = url.password;
    const cloudName = url.hostname;
    useImperativeMethods(() => ({
        connectEnv: () => ({
            CLOUDINARY_KEY: key,
            CLOUDINARY_SECRET: secret,
            CLOUDINARY_CLOUD_NAME: cloudName,
            CLOUDINARY_URL: props.uri
        })
    }));
    return null;
}

export abstract class GoogleMaps extends PrimitiveComponent implements ConnectToInstance {
    connectEnv(_scope?: NetworkScope) { return undefined; }
}

export function GoogleMapsProvider(props: { key: string }) {
    useImperativeMethods(() => ({
        connectEnv: () => ({
            GOOGLE_MAPS_KEY: props.key
        })
    }));
    return null;
}

export function MongoDBProvider(props: { uri: string }) {
    new URL(props.uri); //parse URL validate formatting
    useImperativeMethods(() => ({
        connectEnv: () => ({
            MONGODB_URI: props.uri
        })
    }));
    return null;
}

export function RedisProvider(props: { uri: string }) {
    new URL(props.uri); //parse URL validate formatting
    useImperativeMethods(() => ({
        connectEnv: () => ({
            REDIS_URI: props.uri
        })
    }));
    return null;
}

export abstract class GoogleAuth extends PrimitiveComponent implements ConnectToInstance {
    connectEnv(_scope?: NetworkScope) { return undefined; }
}
export function GoogleAuthProvider(props: {
    clientId: string,
    clientSecret: string
}) {
    useImperativeMethods(() => ({
        connectEnv: () => ({
            GOOGLE_CLIENT_ID: props.clientId,
            GOOGLE_CLIENT_SECRET: props.clientSecret
        })
    }));
    return null;
}

export abstract class FacebookAuth extends PrimitiveComponent implements ConnectToInstance {
    connectEnv(_scope?: NetworkScope) { return undefined; }
}

export function FacebookAuthProvider(props: {
    appId: string,
    appSecret: string
}) {
    useImperativeMethods(() => ({
        connectEnv: () => ({
            FACEBOOK_APP_ID: props.appId,
            FACEBOOK_APP_SECRET: props.appSecret
        })
    }));
    return null;
}


