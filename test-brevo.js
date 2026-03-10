const fs = require('fs');
const path = require('path');

// Basic .env parser
function loadEnv() {
    const envPath = path.resolve(process.cwd(), '.env.local');
    if (!fs.existsSync(envPath)) {
        console.log('.env.local not found');
        return {};
    }
    const content = fs.readFileSync(envPath, 'utf8');
    const env = {};
    content.split('\n').forEach(line => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
            env[match[1]] = match[2].replace(/(^['"]|['"]$)/g, '');
        }
    });
    return env;
}

async function testBrevo() {
    const env = loadEnv();
    const apiKey = env.BREVO_API_KEY;

    console.log('Testing key:', apiKey ? (apiKey.substring(0, 8) + '...') : 'NULL');
    console.log('Key length:', apiKey ? apiKey.length : 0);

    try {
        const response = await fetch('https://api.brevo.com/v3/account', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'api-key': apiKey
            }
        });

        const data = await response.json();
        console.log('Response Status:', response.status);
        console.log('Response Data:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error during fetch:', error);
    }
}

testBrevo();
