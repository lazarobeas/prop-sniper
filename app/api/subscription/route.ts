import mailchimp from "@mailchimp/mailchimp_marketing"

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
})

export async function POST(request: Request){
    const { email } = await request.json();

    if (!email) return new Response(JSON.stringify({error: "Email is required"}))

    try {
        const res = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID!,
            {email_address: email, status:"subscribed"}
        )

        // Add a success field to the response object
        return new Response(JSON.stringify({ success: true, res }))
    } catch(error: any){
        // Parse the error message from the error object
        const errorMessage = JSON.parse(error.response.text);

        // Pass the error message to the frontend
        return new Response(JSON.stringify({ error: errorMessage }));
    }
}