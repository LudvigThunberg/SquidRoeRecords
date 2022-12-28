import type { NextApiRequest, NextApiResponse } from "next";
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name } = req.body.data;

  try {
    const response = await mailchimp.client.lists.addListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID,
      {
        email_address: email,
        full_name: name,
        status: "subscribed",
        tags: "emailSubscriber",
      }
    );
    console.log(response);
    res.send(response);
  } catch (error) {
    console.log("EERREEEOOR::", error);
    res.status(200).json({ err: "err" });
  }
  res.status(200).json({ name: "John Doe" });
}
