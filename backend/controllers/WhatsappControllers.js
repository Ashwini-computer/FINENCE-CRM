const { default: axios } = require('axios');
const twilio = require('twilio');
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const TWILIO_WHATSAPP_NUMBER = process.env.TWILIO_WHATAPPS_NUMBER;
const WATI_API_URL=process.env.WATI_API_URL;
const WATI_API_KEY=process.env.WATI_API_KEY;

exports.sendofferMessage = async (req, res) => {
    try {
        const { mobilenumbers, message } = req.body;
        console.log(mobilenumbers, message);

        const response = await twilioClient.messages.create({
            from: `whatsapp:${TWILIO_WHATSAPP_NUMBER}`,
            to: `whatsapp:${mobilenumbers}`,
            body: message
        });
        console.log(response)
        return res.status(200).json({ message: "Message Sent Successfully", sid: response.sid });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "failed", error });
    }
};

exports.bulkwhatsappMessage = async (req, res) => {
    const { numbers, template_name, parameters } = req.body;
    try {
        const results = [];
        for (const number of numbers) {
            const payload = {
                template_name,
                prodcast_name: "BulkMessage",
                parameters,
                phone_number: number
            };
            const response = await axios.post(WATI_API_URL ,{ payload },
                {
                    headers: {
                        'Authorization': `Bearer ${WATI_API_KEY}`,
                        'Content-Type': 'application/json'
                    }
                }
            )
            results.push({ number, status: 'sent', response: response.data })
        }
        res.status(200).json({ message: 'Bulk messages sent!', results });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Bulk message sending failed', error });

    }
}

