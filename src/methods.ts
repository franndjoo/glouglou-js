import { Configuration, Email } from "./interfaces";
import { composeURL, sendRequest } from "./utils";

/** Used to send an email */
export async function sendEmail(config: Configuration, email: Email) {
    const composedURL = composeURL(config, "send", {
        "api-key": config.apiKey,
        "to": `${email.recipient.name} <${email.recipient.email}>`,
        "subject": email.subject,
        "body": email.body,
        ...(email.cc !== undefined ? { "cc": `${email.cc.name} <${email.cc.email}>` } : "")
    });
    return await sendRequest(composedURL);
}

/** Used to verify the validity if the given API key */
export async function verifyAPIKey(config: Configuration) {
    const composedURL = composeURL(config, "access-ok", { "api-key": config.apiKey });
    return await sendRequest(composedURL);
}

/** Used to verify that the remote GlouGlou instance is reachable */
export async function pingInstance(config: Configuration) {
    const composedURL = composeURL(config, "ping");
    return await sendRequest(composedURL);
}