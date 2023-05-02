import { pingInstance, sendEmail, verifyAPIKey } from "@johanmnto/glougloujs";
import type { Configuration } from "@johanmnto/glougloujs";

const config: Configuration = { domain: "127.0.0.1", port: 1503, secure: false, apiKey: "|zMXxYC4*0)=hu8j3\\Y{R|+rGSPwVr[pO?QN:{U*+)c@oZV+g8qMt1Z)P[T,U^{3Xe:ADw'wP7*?nJW@9iQJ_u)Grk7U6~LYTK@[-g'^Gjm]2.`J0Le1Pm7T3+Njwray1[Bl8?BJOnWV75g,QNU\\yk(4g-UBj+p9fiyd/+`:e=vactG+72M+bOR~eY30{_hjD;`S2DDvT).OW-PCc@BKOI2HosP-]@f;X.*Sc?y4GkH^Tiv`_9@QD}g5<p10z-U=" };

async function asyncTest() {
    console.log(await sendEmail(config, { body: "NODE_TEST", recipient: { email: "a36.carbelo@gmail.com", name: "Astrid Carbelo" }, subject: "TEST" }));
    console.log(await verifyAPIKey(config));
    console.log(await pingInstance(config));
}

asyncTest();