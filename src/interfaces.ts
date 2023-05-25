/** Configuration needed to allow the API to send requests to the correct GlouGlou instance. */
export interface Configuration {
    apiKey: string;
    port?: number;
    domain: string;
    secure: boolean;
}

/** Content of an email that can be sent to the GlouGlou instance. */
export interface Email {
    recipient: {
        name: string,
        email: string
    },
    cc?: {
        name: string,
        email: string
    },
    subject: string,
    body: string,
    fromName: string
}