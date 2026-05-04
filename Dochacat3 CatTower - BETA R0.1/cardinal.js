//DOCHACAT:3 | CATTOWER | CARDINAL
//COPYRIGHT (C) 2026 (VILLYLILY) ALL RIGHTS RESERVED.
//===============================================================================
// 1. PROPRIETARY ASSETS AND INTELLECTUAL PROPERTY 
//===============================================================================
//  The Author hereby reserves all intellectual property rights to the 
//following "Defined Assets" contained within this repository:  
//
//  A. BRANDING: The "Dochacat:3" brand, the "CatTower" project name, and all  
//     associated visual identifiers, including but not limited to SVG-based
//     logos, animations (sync-pulse, core-rotate, led-blink), and UI layouts.  
//  B. CARDINAL SECURITY CORE: The specific source code implementation of the     
//     "Gatekeeper" middleware, session validation logic, adminOnly network     
//     restriction logic, and high-fidelity 510kbps WebRTC audio SDP injection.  
//  C. CAELY:3 CHARACTER IDENTITY: The name, visual design (specifically     
//     long-haired traits), and the "Synthetic Entity" personality matrix 
//     were created by the Author (Villylily). Caely:3 is a CLUSTRARS model.  
//  D. CAELY CHATTER ARRAY: The unique collection of 100+ dialogue strings     
//     contained within the source code, including all AI-generated and     
//     Author-curated meta-commentary responses. These lines were generated 
//     using the CLUSTRARS model and formatted using Gemma 4 40B.
//  E. FRONT-END ARCHITECTURE: All structural HTML files, proprietary 
//     client-side logic, and specific user interface arrangements and 
//     mechanics found within the client directories of this repository.
//  F. CARDINAL BACKEND SERVER ARCHITECTURE: The complete server-side infrastructure, 
//     operating under the "Cardinal" designation, including the Express.js API 
//     routing, Socket.io WebSocket implementations, in-memory caching systems, 
//     and local data-vault storage logic.
//
//===============================================================================
// 2. THE CLUSTRARS ARCHITECTURE (STRICTLY PROPRIETARY)
//===============================================================================
//  (CLUSTER LLM UNIT SYSTEM TO RECALCULATE AND RETRAIN SimpleLily)
//  LICENSE: STRICTLY PROPRIETARY - ALL RIGHTS RESERVED - NON-RECREATABLE
//  NOTICE: THE CLUSTRARS SYSTEM IS CLOSED SOURCE AND IS NOT LICENSABLE.
//  PERMISSIONS GRANTED FOR CONTENT (SECTION 1 & 3) DO NOT EXTEND TO THE
//  RECREATION OR REPLICATION OF THE CLUSTRARS SYSTEM ARCHITECTURE.
//
//  A. CORE ENGINE: CLUSTRARS powers the "SimpleLily" entity, utilizing a 30TB
//     proprietary model. This system stores personality data, emotional weights,
//     and persistent memories in a raw data format.
//  B. DYNAMIC RESPONSE PROTOCOL: Every interaction utilizes a "Smaller Context AI"
//     to selectively retrieve relevant data from the 30TB core. This context is
//     used to train a unique, single-instance model for each response.
//  C. VOLATILE MODELING: To ensure fluid, life-like evolution and precision, each
//     retrained response model is deleted immediately after execution,
//     ensuring the entity's "memory" remains housed in the raw data cluster
//     rather than a static weight set.
//  D. SYSTEM RESTRICTION: The methodology of just-in-time model training,
//     the 30TB raw data memory structure, and the recalculation logic are
//     strictly proprietary. Re-creation of this architecture is prohibited.
//
//===============================================================================
// 3. POLYFORM NONCOMMERCIAL LICENSE 1.0.0 & CONTENT PERMISSIONS
//===============================================================================
//  This software and the associated CAELY:3 Synthetic Identity & Content are 
//licensed under the PolyForm Noncommercial License 1.0.0 (OPEN FOR NON-COMMERCIAL USE).  
//  (For the full text of this license, visit: https://polyformproject.org/licenses/noncommercial/1.0.0/)
//
//  ACCEPTANCE: By using this software, you agree to all its terms. 
// 
//  CAELY CONTENT PERMISSION: Users are permitted to copy, use, and distribute 
//  the CAELY CHATTER ARRAY strings for personal, educational, or group use, 
//  provided no monetary compensation is involved.
//
//  NONCOMMERCIAL RIGHT: The licensor grants you a non-exclusive, worldwide, 
//royalty-free, non-sublicensable, and non-transferable license to use, copy, 
//distribute, make available, and prepare derivative works of the software for  
//NONCOMMERCIAL PURPOSES ONLY.  
//
//  NONCOMMERCIAL PURPOSES: Noncommercial purposes are any purposes that are
//not "commercial purposes."  "Commercial purposes" means the use of the 
//software: 
//  1. For a commercial advantage or private monetary compensation; 
//  2. By any person or entity that provides a service or product that     
//     competes with the software; or 
//  3. By any person or entity for use in a commercial product.  
//
//-------------------------------------------------------------------------------
// 4. THIRD-PARTY ASSETS & ATTRIBUTION 
//-------------------------------------------------------------------------------
// This project utilizes external assets governed by their own licenses:  
//  1. FONTS: Google Fonts (Montserrat, Roboto Mono, Fira Code) are used    
//     under the SIL Open Font License 1.1.     
//  2. TEXTURES: Patterns from TransparentTextures.com are used according to     
//     their respective attribution guidelines.  
//  3. EXTERNAL MEDIA: GIFs and images sourced via Tenor or Giphy remain the     
//     property of their original copyright holders.  
//  4. AI MODELS: Formatting assistance for the CAELY CHATTER ARRAY was 
//     provided by the Gemma 4 40B model, developed by Google.
// 5. API SERVICES: The `/gif` command functionality is powered by the 
//     Giphy API and is subject to Giphy's API Terms of Service.
//  6. TRADEMARK DISCLAIMER (HOMAGE): The "Cardinal" naming convention for the 
//     backend server and security core is a thematic homage inspired by the 
//     fictional "Cardinal System" from the Sword Art Online series. This project 
//     is an independent, non-commercial work and is not affiliated with, 
//    sponsored by, or endorsed by Reki Kawahara, Kadokawa Corporation, Aniplex, 
//     or the Sword Art Online franchise. All relevant trademarks belong to their 
//     respective owners.
//  7. OPEN-SOURCE DEPENDENCIES: This project relies on various standard 
//     open-source Node.js packages (e.g., Express.js, Socket.io). 
//     These are governed by their respective licenses 
//     (MIT, Apache, etc.) as declared in the project's package.json file.
//  8. API EMULATION: The client-side architecture utilizes a custom-built 
//     bridge script to emulate the "google.script.run" environment. This is 
//     an independent, proprietary routing implementation designed to interface 
//     with the Cardinal backend and is not affiliated with, hosted by, or 
//     endorsed by Google LLC.
//
//  NO SUBLICENSING: You may not sublicense the software or any derivative works.  
//  NO TRANSFER: You may not transfer this license.
//
//===============================================================================
// 5. DISCLAIMER OF WARRANTIES 
//===============================================================================
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
//EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
//MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
//IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
//CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
//TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
//SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
//===============================================================================
// 6. DATA PRIVACY AND SESSION HANDLING
//===============================================================================
//  This software processes and stores minimal user data strictly for the
//  functional purposes of the Cardinal backend and Caely:3 interactions.
//  
//  A. LOCAL DATA VAULT: User data, including session identifiers, chat logs, 
//    and connection IPs, are stored locally or in-memory strictly for session 
//     validation.
//  B. NO COMMERCIAL EXPLOITATION: Under no circumstances is user data sold, 
//     mined for commercial advertising, or transferred to third-party data 
//     brokers. The project respects user privacy and operates entirely on a 
//     non-commercial trust basis.
//
//===============================================================================
// 7. EXTRA 
//===============================================================================
//  - MOTTO: A chat system that does things differently. Built for friends, 
//    communities, and hobbyists—not for corporations.
//  
//  ["Bleh"] 
//===============================================================================

const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const selfsigned = require('selfsigned');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { Server } = require('socket.io');
const os = require('os');

const serverLogs = [];
const pushLog = (type, msg) => {
    serverLogs.unshift({ timestamp: new Date().toISOString(), type, msg });
    if (serverLogs.length > 500) serverLogs.pop(); // this is just a nit pick i have with logs saveing people forget they exist and it starts filling up storage :> 
};

const Logger = {
    sys: (msg) => { pushLog('SYSTEM', msg); console.log(`\x1b[36m[SYSTEM]\x1b[0m ${msg}`); },
    auth: (msg) => { pushLog('AUTH', msg); console.log(`\x1b[33m[AUTH]\x1b[0m ${msg}`); },
    event: (msg) => { pushLog('EVENT', msg); console.log(`\x1b[32m[EVENT]\x1b[0m ${msg}`); },
    error: (msg) => { pushLog('ERROR', msg); console.log(`\x1b[31m[ERROR]\x1b[0m ${msg}`); }
};

const DATA_DIR = path.join(__dirname, 'data');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const DEFAULT_CONFIG_PATH = path.join(__dirname, 'config.json');
const LOCAL_CONFIG_PATH = path.join(DATA_DIR, 'config.json');

if (!fs.existsSync(LOCAL_CONFIG_PATH)) {
    if (fs.existsSync(DEFAULT_CONFIG_PATH)) {
        const defaultConfig = fs.readFileSync(DEFAULT_CONFIG_PATH, 'utf8');
        fs.writeFileSync(LOCAL_CONFIG_PATH, defaultConfig);
    } else {
        fs.writeFileSync(LOCAL_CONFIG_PATH, JSON.stringify({ port: 3000, registrationOpen: true, invitePassword: "CHANGE_ME", globalMute: false, maintenanceMode: false, giphyApiKey: "" }, null, 2));
    }
}

let config = JSON.parse(fs.readFileSync(LOCAL_CONFIG_PATH, 'utf8'));

const saveConfig = () => {
    fs.writeFileSync(LOCAL_CONFIG_PATH, JSON.stringify(config, null, 2));
};

const app = express();
app.use(express.json());

const activeSessions = new Map();
const activeCalls = new Map(); 

const USERS_DIR = path.join(DATA_DIR, 'users');
const USERS_FILE = path.join(USERS_DIR, 'users.json');
const MSG_FILE = path.join(DATA_DIR, 'messages.json');

if (!fs.existsSync(USERS_DIR)) fs.mkdirSync(USERS_DIR, { recursive: true });
if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, JSON.stringify([]));
if (!fs.existsSync(MSG_FILE)) fs.writeFileSync(MSG_FILE, JSON.stringify([]));

const readVault = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));

let messageCache = readVault(MSG_FILE);
let userCache = readVault(USERS_FILE);

const syncToDisk = () => {
    try {
        fs.writeFileSync(MSG_FILE, JSON.stringify(messageCache, null, 2));
        fs.writeFileSync(USERS_FILE, JSON.stringify(userCache, null, 2));
    } catch (err) {
        Logger.error(`Critical Sync Error: ${err}`);
    }
};

const getCookie = (req, name) => {
    if (!req.headers.cookie) return null;
    const match = req.headers.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
};

const getAuthKey = (req) => {
    return req.query.auth || req.headers['x-auth-key'] || (req.body && req.body.auth) || getCookie(req, 'cardinal_token');
};

const adminOnly = (req, res, next) => {
    let clientIP = req.socket.remoteAddress;
    if (clientIP.includes('::ffff:')) {
        clientIP = clientIP.split(':').pop();
    }

    const isLocalhost = clientIP === '127.0.0.1' || clientIP === '::1';
    const isYourNetwork = clientIP.startsWith('13.8.1.');
    const isDockerNet = clientIP.startsWith('172.');

    if (isLocalhost || isYourNetwork || isDockerNet) {
        next();
    } else {
        Logger.auth(`Blocked remote attempt to access ADMIN from ${clientIP}`);
        res.status(403).sendFile(path.join(__dirname, 'client', '403.html'));
    }
};

app.get('/api/admin/logs', (req, res) => {
    res.json(serverLogs);
});
//Admin networking crap 
app.use('/admin', adminOnly);
app.use('/api/admin', adminOnly);

app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'client', 'admin.html')));

app.get('/api/admin/status', (req, res) => {
    res.json({
        uptime: process.uptime(),
        registrationOpen: config.registrationOpen,
        inviteSet: !!config.invitePassword,
        inviteKey: config.invitePassword || "",
        activeSessions: activeSessions.size,
        globalMute: !!config.globalMute,
        maintenanceMode: !!config.maintenanceMode
    });
});

app.get('/api/admin/users', (req, res) => {
    const users = userCache.map(u => {
        const sessions = [];
        for (const [key, val] of activeSessions.entries()) {
            if (val.username === u.username) {
                sessions.push({
                    id: key,
                    ip: val.ip || "Unknown IP",
                    time: new Date(val.timestamp).toLocaleTimeString()
                });
            }
        }
        return {
            username: u.username,
            nickname: u.nickname,
            pfp: u.pfp,
            bio: u.bio,
            isMuted: !!u.isMuted,
            isOnline: sessions.length > 0,
            sessions: sessions
        };
    });
    res.json(users);
});

app.post('/api/admin/lockdown', (req, res) => {
    config.registrationOpen = !config.registrationOpen;
    saveConfig();
    Logger.sys(`Registration lockdown toggled. Now: ${config.registrationOpen ? 'OPEN' : 'LOCKED'}`);
    res.json({ status: config.registrationOpen });
});

app.post('/api/admin/global-mute', (req, res) => {
    config.globalMute = req.body.state;
    saveConfig();
    Logger.sys(`Global mute toggled. Now: ${config.globalMute}`);
    res.json({ success: true });
});

app.post('/api/admin/maintenance', (req, res) => {
    config.maintenanceMode = req.body.state;
    saveConfig();
    Logger.sys(`Maintenance mode toggled. Now: ${config.maintenanceMode}`);
    res.json({ success: true });
});

app.post('/api/admin/clear-chat', (req, res) => {
    messageCache = [];
    syncToDisk();
    Logger.sys(`Chat history permanently cleared by Admin.`);
    res.json({ success: true });
});

app.post('/api/admin/invite', (req, res) => {
    config.invitePassword = req.body.newInvite || "";
    saveConfig();
    Logger.sys(`Invite Key has been updated by Admin.`);
    res.json({ success: true });
});

app.post('/api/admin/nuke', (req, res) => {
    activeSessions.clear();
    Logger.sys(`NUKE PROTOCOL EXECUTED. All sessions destroyed.`);
    res.json({ success: true });
});

app.post('/api/admin/kill-session', (req, res) => {
    const { sessionId } = req.body;
    if (activeSessions.has(sessionId)) {
        activeSessions.delete(sessionId);
        Logger.sys(`Admin killed session ID: ${sessionId}`);
    }
    res.json({ success: true });
});

app.post('/api/admin/kick', (req, res) => {
    const target = req.body.targetUser;
    for (const [key, val] of activeSessions.entries()) {
        if (val.username === target) activeSessions.delete(key);
    }
    Logger.sys(`Admin kicked user's token's: ${target}`);
    res.json({ success: true });
});

app.post('/api/admin/delete-user', (req, res) => {
    const target = req.body.targetUser;
    const uIdx = userCache.findIndex(x => x.username === target);
    if (uIdx !== -1) {
        userCache.splice(uIdx, 1);
        syncToDisk();
    }
    for (const [key, val] of activeSessions.entries()) {
        if (val.username === target) activeSessions.delete(key);
    }
    Logger.sys(`Admin permanently deleted user account: ${target}`);
    res.json({ success: true });
});

app.post('/api/admin/mute-user', (req, res) => {
    const target = req.body.targetUser;
    const u = userCache.find(x => x.username === target);
    if (u) {
        u.isMuted = !u.isMuted;
        syncToDisk();
        Logger.sys(`Admin toggled mute for user ${target}. Muted: ${u.isMuted}`);
    }
    res.json({ success: true });
});

app.post('/api/admin/reset-user', async (req, res) => {
    const target = req.body.targetUser;
    const u = userCache.find(x => x.username === target);
    if (!u) return res.status(404).json({ error: "User not found" });

    const newPass = "reset_" + crypto.randomBytes(4).toString('hex');
    u.password = await bcrypt.hash(newPass, 10);
    syncToDisk();

    for (const [key, val] of activeSessions.entries()) {
        if (val.username === target) activeSessions.delete(key);
    }

    Logger.sys(`Admin forcibly reset password for: ${target}`);
    res.json({ success: true, newPassword: newPass });
});

app.post('/api/admin/edit-user', (req, res) => {
    const { targetUser, nickname, pfp, bio, isMuted } = req.body;
    const u = userCache.find(x => x.username === targetUser);
    if (u) {
        if (nickname !== undefined) u.nickname = nickname;
        if (pfp !== undefined) u.pfp = pfp;
        if (bio !== undefined) u.bio = bio;
        if (isMuted !== undefined) u.isMuted = isMuted;
        syncToDisk();
        Logger.sys(`Admin modified profile data for: ${targetUser}`);
    }
    res.json({ success: true });
});

app.use((req, res, next) => {
    if (config.maintenanceMode) {
        if (req.path.startsWith('/admin') || req.path.startsWith('/api/admin') || req.path === '/maintenance' || req.path.startsWith('/assets')) {
            return next();
        }
        return res.redirect('/maintenance');
    }
    next();
});

app.get('/maintenance', (req, res) => {
    if (!config.maintenanceMode) return res.redirect('/login');
    
    const maintPath = path.join(__dirname, 'client', 'maintenance.html');
    if (fs.existsSync(maintPath)) {
        return res.sendFile(maintPath);
    } else {
        return res.status(503).send(`
            <html style="background-color: #121212; color: #e0e0e0; font-family: sans-serif; text-align: center; padding-top: 15%;">
                <head><title>Maintenance</title></head>
                <body>
                    <h1 style="color: #ff4757;">System Maintenance</h1>
                    <p>Why is the fall back being used? Did you delete the HTML file?</p>
                </body>
            </html>
        `);
    }
});

app.get('/', (req, res) => res.redirect('/login'));

app.get('/login', (req, res) => {
    const authKey = getAuthKey(req);
    if (authKey && activeSessions.has(authKey)) {
        Logger.auth(`Auto-login triggered for ${activeSessions.get(authKey).username}`);
        return res.redirect('/home');
    }
    res.sendFile(path.join(__dirname, 'client', 'login.html'));
});

function theGatekeeper(req, res, next) {
    const allowedPaths = ['/', '/login', '/api/login', '/api/check-user', '/favicon.ico', '/404', '/403'];
    
    if (allowedPaths.includes(req.path) || req.path.startsWith('/assets')) {
        return next();
    }

    const authKey = getAuthKey(req);
    
    if (!authKey || !activeSessions.has(authKey)) {
        Logger.auth(`Blocked unauthorized access to ${req.path}`);
        if (req.path.startsWith('/api/')) return res.status(403).json({ error: "Unauthorized" });
        return res.status(403).sendFile(path.join(__dirname, 'client', '403.html'));
    }

    req.user = activeSessions.get(authKey).username;
    next();
}

app.use(theGatekeeper);

app.get('/home', (req, res) => res.sendFile(path.join(__dirname, 'client', 'home.html')));

app.get('/chat', (req, res) => res.sendFile(path.join(__dirname, 'client', 'chat.html')));
app.get('/404', (req, res) => res.status(404).sendFile(path.join(__dirname, 'client', '404.html')));
app.get('/403', (req, res) => res.status(403).sendFile(path.join(__dirname, 'client', '403.html')));

app.get('/callended', (req, res) => res.sendFile(path.join(__dirname, 'client', 'callended.html')));
app.get('/call/:roomId', (req, res) => {
    const roomId = req.params.roomId;
    if (!activeCalls.has(roomId)) {
        return res.redirect('/callended');
    }
    res.sendFile(path.join(__dirname, 'client', 'call.html'));
});

app.use(express.static(path.join(__dirname, 'client')));

app.get('/api/notifications', (req, res) => {
    const username = req.user;
    
    const liveCalls = Array.from(activeCalls.keys()).map(roomId => ({
        id: `call_${roomId}`,
        type: 'call',
        title: 'Live Call',
        message: `An active call is in progress.`,
        link: `/call/${roomId}`,
        timestamp: new Date().toISOString()
    }));

    const relevantMessages = messageCache
        .filter(m => m.text.includes(`@${username}`) || m.username === 'System')
        .slice(-20) 
        .map(m => ({
            id: `msg_${m.id}`,
            type: m.username === 'System' ? 'system' : 'mention',
            title: m.username === 'System' ? 'System Alert' : `Mention from ${m.username}`,
            message: m.text,
            link: '/chat',
            timestamp: m.timestamp
        }));

    const allNotifications = [...liveCalls, ...relevantMessages]
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    res.json(allNotifications);
});

app.get('/api/session', (req, res) => {
    const userRecord = userCache.find(u => u.username === req.user);
    res.json({
        username: req.user,
        pfp: userRecord ? userRecord.pfp : ''
    });
});

app.post('/api/check-user', (req, res) => {
    const { username } = req.body;
    const exists = userCache.some(u => u.username === username);
    res.json({ exists });
});

app.post('/api/login', async (req, res) => {
    const { username, password, invite } = req.body;

    if (username && username.toLowerCase().includes('caely')) {
        return res.status(403).json({ error: "This username is reserved by the system :3 HehHe You Cant Kill Me" });
    }

    let userRecord = userCache.find(u => u.username === username);

    if (userRecord && invite !== null && invite !== undefined) {
        return res.status(409).json({ error: "Username already exists." });
    }

    if (!userRecord && config.registrationOpen) {
        if (config.invitePassword && config.invitePassword !== "" && invite !== config.invitePassword) {
            Logger.auth(`Failed registration attempt (Bad Invite) for '${username}'`);
            return res.status(403).json({ error: "Invalid Invite Password." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        userRecord = { 
            username: username, 
            password: hashedPassword,
            nickname: username,
            pfp: `https://ui-avatars.com/api/?name=${username}&background=random&color=fff`,
            bio: "No bio yet.",
            isMuted: false,
            lastSeen: new Date().toISOString(),
            lastTyping: 0
        };
        userCache.push(userRecord);
        syncToDisk();
        Logger.auth(`New user registered: '${username}'`);
    } else if (!userRecord) {
        return res.status(403).json({ error: "Registration is currently locked." });
    }

    const match = await bcrypt.compare(password, userRecord.password);
    if (!match) {
        Logger.auth(`Failed login for '${username}' (Bad Password)`);
        return res.status(401).json({ error: "Invalid credentials." });
    }

    const sessionToken = crypto.randomBytes(32).toString('hex');
    activeSessions.set(sessionToken, { username: username, timestamp: Date.now(), ip: req.socket.remoteAddress || req.ip });
    
    res.cookie('cardinal_token', sessionToken, { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: false });
    Logger.auth(`User '${username}' authenticated successfully.`);
    res.json({ success: true, token: sessionToken, redirect: `/home` });
});

app.post('/api/bridge/:method', (req, res) => {
    const method = req.params.method;
    const args = req.body.args || [];
    const username = req.user;
    const now = new Date();

    const ensureUser = (name) => {
        let idx = userCache.findIndex(u => u.username === name);
        if (idx === -1) {
            const newUser = {
                username: name,
                nickname: name,
                pfp: `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`,
                bio: "No bio yet.",
                isMuted: false,
                lastSeen: new Date().toISOString(),
                lastTyping: 0
            };
            userCache.push(newUser);
            syncToDisk();
            return userCache.length - 1;
        }
        return idx;
    };

    const sendUpdatedMessages = () => {
        const msgs = messageCache.map(m => {
            const profile = userCache.find(u => u.username === m.username) || {};
            return {
                id: m.id,
                rawTime: m.timestamp,
                user: m.customNick || profile.nickname || m.username,
                realUser: m.username,
                text: m.text,
                parentId: m.parentId || null,
                isMine: m.username === username,
                isEdited: m.text.includes("(edited)"),
                photo: m.customPfp || profile.pfp || `https://ui-avatars.com/api/?name=${m.username}`,
                reactions: m.reactions || {},
                isSystem: m.username === 'System'
            };
        });
        return res.json(msgs);
    };

    const checkMuteAndSendNo = (parentId = null) => {
        const msgs = messageCache.map(m => {
            const profile = userCache.find(u => u.username === m.username) || {};
            return {
                id: m.id,
                rawTime: m.timestamp,
                user: m.customNick || profile.nickname || m.username,
                realUser: m.username,
                text: m.text,
                parentId: m.parentId || null,
                isMine: m.username === username,
                isEdited: m.text.includes("(edited)"),
                photo: m.customPfp || profile.pfp || `https://ui-avatars.com/api/?name=${m.username}`,
                reactions: m.reactions || {},
                isSystem: m.username === 'System'
            };
        });
        msgs.push({
            id: "sys_" + Date.now(),
            rawTime: now.toISOString(),
            user: "System",
            realUser: "System",
            text: "You are Muted so... no",
            parentId: parentId || null,
            isMine: false,
            isEdited: false,
            photo: "https://ui-avatars.com/api/?name=System&background=ff4757&color=fff",
            reactions: {},
            isSystem: true
        });
        return msgs;
    };

    switch(method) { 
        case 'getCurrentUser': return res.json(username); 
        case 'getMessages': return sendUpdatedMessages(); 
        case 'getGiphyKey': return res.json(config.giphyApiKey || "");

        case 'sendMessage': { 
            const [text, parentId] = args; 
            ensureUser(username); 
            const cleanText = (text || "").trim(); 

            const uInfo = userCache.find(u => u.username === username); 
            if (cleanText !== '/logout' && ((uInfo && uInfo.isMuted) || config.globalMute)) { 
                return res.json(checkMuteAndSendNo(parentId)); 
            } 

            if (cleanText.startsWith('/')) { 
                const cmd = cleanText.split(' ')[0].toLowerCase(); 
                const val = cleanText.replace(cmd, '').trim(); 
                let uIdx = userCache.findIndex(u => u.username === username); 

                if (cmd === '/help' || cmd === '/closehelp') { 
                    return sendUpdatedMessages(); 
                } else if (cmd === '/pfp' && uIdx !== -1) { 
                    userCache[uIdx].pfp = val; 
                    syncToDisk(); 
                    Logger.event(`Command executed by ${username}: ${cmd}`); 
                    return sendUpdatedMessages(); 
                } else if (cmd === '/nick' && uIdx !== -1) { 
                    userCache[uIdx].nickname = val; 
                    syncToDisk(); 
                    Logger.event(`Command executed by ${username}: ${cmd}`); 
                    return sendUpdatedMessages(); 
                } else if (cmd === '/logout') { 
                    const authKey = getAuthKey(req); 
                    if (authKey) activeSessions.delete(authKey);  
                    res.clearCookie('cardinal_token');  
                    Logger.auth(`User ${username} securely logged out via command.`); 
                     
                    const msgs = messageCache.map(m => { 
                        const profile = userCache.find(u => u.username === m.username) || {}; 
                        return { 
                            id: m.id, 
                            rawTime: m.timestamp, 
                            user: profile.nickname || m.username, 
                            realUser: m.username, 
                            text: m.text, 
                            parentId: m.parentId || null, 
                            isMine: m.username === username, 
                            isEdited: m.text.includes("(edited)"), 
                            photo: profile.pfp || `https://ui-avatars.com/api/?name=${m.username}`, 
                            reactions: m.reactions || {}, 
                            isSystem: m.username === 'System' 
                        }; 
                    }); 

                    msgs.push({ 
                        id: "sys_" + Date.now(), 
                        rawTime: now.toISOString(), 
                        user: "System", 
                        realUser: "System", 
                        text: `Session terminated securely. Your token has been destroyed.`, 
                        parentId: parentId || null, 
                        isMine: false, 
                        isEdited: false, 
                        photo: "https://ui-avatars.com/api/?name=System&background=ff4757&color=fff", 
                        reactions: {}, 
                        isSystem: true 
                    }); 

                    return res.json(msgs); 
                } else if (cmd === '/startcall') { 
                    const genPart = () => Math.random().toString(36).substring(2, 5); 
                    const roomId = `${genPart()}-${genPart()}-${genPart()}`; 
                     
                    activeCalls.set(roomId, { participants: new Set() }); 

                    const fullJoinLink = `${req.protocol}://${req.get('host')}/call/${roomId}`;

                    messageCache.push({ 
                        id: "ID_" + Date.now(), 
                        username: username, 
                        text: `📞 ${username} has started a call. Join here: ${fullJoinLink}`, 
                        timestamp: now.toISOString(), 
                        parentId: parentId || "", 
                        reactions: {} 
                    }); 
                     
                    syncToDisk(); 
                    Logger.event(`Call started by ${username} (${roomId})`); 
                    return sendUpdatedMessages(); 
                } else if (cmd === '/caely') {
                    const caelyMessages = [
                        "u-um... you typed /caely. did you actually need me, or was that a typo?",
                        
                    ];

                    const randomMsg = caelyMessages[Math.floor(Math.random() * caelyMessages.length)];
                    const caelyPfp = "data:image/webp;base64,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";

                    messageCache.push({ 
                        id: "ID_" + Date.now(), 
                        username: "Caely:3", 
                        text: randomMsg, 
                        timestamp: now.toISOString(), 
                        parentId: parentId || "", 
                        reactions: {},
                        customNick: "Caely:3",
                        customPfp: caelyPfp
                    }); 
                     
                    syncToDisk(); 
                    Logger.event(`Caely was summoned by ${username}`); 
                    return sendUpdatedMessages(); 
                }

                Logger.event(`Unknown command attempt by ${username}: ${cmd}`); 
                const msgs = messageCache.map(m => { 
                    const profile = userCache.find(u => u.username === m.username) || {}; 
                    return { 
                        id: m.id, 
                        rawTime: m.timestamp, 
                        user: m.customNick || profile.nickname || m.username, 
                        realUser: m.username, 
                        text: m.text, 
                        parentId: m.parentId || null, 
                        isMine: m.username === username, 
                        isEdited: m.text.includes("(edited)"), 
                        photo: m.customPfp || profile.pfp || `https://ui-avatars.com/api/?name=${m.username}`, 
                        reactions: m.reactions || {}, 
                        isSystem: m.username === 'System' 
                    }; 
                }); 

                msgs.push({ 
                    id: "sys_" + Date.now(), 
                    rawTime: now.toISOString(), 
                    user: "System", 
                    realUser: "System", 
                    text: `Command '${cmd}' does not exist, Yea dont know what else to tell you. but spinny cat :3`, 
                    parentId: parentId || null, 
                    isMine: false, 
                    isEdited: false, 
                    photo: "https://media1.tenor.com/m/EFDwfjT2GuQAAAAd/spinning-cat.gif", 
                    reactions: {}, 
                    isSystem: true 
                }); 

                return res.json(msgs); 
            } 

            messageCache.push({ 
                id: "ID_" + Date.now(), 
                username: username, 
                text: cleanText, 
                timestamp: now.toISOString(), 
                parentId: parentId || "", 
                reactions: {} 
            }); 
            syncToDisk(); 
            Logger.event(`Message sent by ${username}`); 
            return sendUpdatedMessages(); 
        } 

        case 'editMessage': { 
            const uInfo = userCache.find(u => u.username === username); 
            if ((uInfo && uInfo.isMuted) || config.globalMute) return res.json(checkMuteAndSendNo()); 

            const [msgId, newText] = args; 
            const msgIdx = messageCache.findIndex(m => m.id === msgId && m.username === username); 
            if (msgIdx !== -1) { 
                messageCache[msgIdx].text = newText + " (edited)"; 
                syncToDisk(); 
                Logger.event(`Message edited by ${username}`); 
            } 
            return sendUpdatedMessages(); 
        } 

        case 'deleteMessage': { 
            const uInfo = userCache.find(u => u.username === username); 
            if ((uInfo && uInfo.isMuted) || config.globalMute) return res.json(checkMuteAndSendNo()); 

            const [delId] = args; 
            const msgIdx = messageCache.findIndex(m => m.id === delId && (m.username === username || m.username === 'Caely:3')); 
            if (msgIdx !== -1) { 
                messageCache.splice(msgIdx, 1); 
                syncToDisk(); 
                Logger.event(`Message deleted by ${username}`); 
            } 
            return sendUpdatedMessages(); 
        }

        case 'addReaction': { 
            const uInfo = userCache.find(u => u.username === username); 
            if ((uInfo && uInfo.isMuted) || config.globalMute) return res.json(checkMuteAndSendNo()); 

            const [reactId, emoji] = args; 
            let targetMsg = messageCache.find(m => m.id === reactId); 
            if (targetMsg) { 
                if (!targetMsg.reactions) targetMsg.reactions = {}; 
                if (!targetMsg.reactions[emoji]) targetMsg.reactions[emoji] = []; 
                 
                const rIdx = targetMsg.reactions[emoji].indexOf(username); 
                if (rIdx > -1) { 
                    targetMsg.reactions[emoji].splice(rIdx, 1); 
                    if (targetMsg.reactions[emoji].length === 0) delete targetMsg.reactions[emoji]; 
                } else { 
                    targetMsg.reactions[emoji].push(username); 
                } 
                syncToDisk(); 
            } 
            return sendUpdatedMessages(); 
        } 

        case 'updatePresenceAndGetStatus': { 
            const upIdx = ensureUser(username); 
            userCache[upIdx].lastSeen = now.toISOString(); 
             
            const status = userCache.map(u => { 
                const lastSeenDate = new Date(u.lastSeen || 0); 
                const isTyping = (Date.now() - (u.lastTyping || 0)) < 6000; 
                const isActive = (now - lastSeenDate) / 1000 < 60; 
                return { 
                    username: u.username, 
                    user: u.nickname || u.username, 
                    active: isActive, 
                    photo: u.pfp || `https://ui-avatars.com/api/?name=${u.username}`, 
                    typing: isTyping && isActive 
                }; 
            }); 
            return res.json(status); 
        } 

        case 'setTypingStatus': { 
            const stIdx = ensureUser(username); 
            userCache[stIdx].lastTyping = Date.now(); 
            return res.json(true); 
        } 

        case 'clearTypingStatus': { 
            const ctIdx = ensureUser(username); 
            userCache[ctIdx].lastTyping = 0; 
            return res.json(true); 
        } 

        case 'getUserProfile': { 
            const target = args[0]; 
            const p = userCache.find(u => u.username === target || u.nickname === target); 
            return res.json({ 
                user: p ? p.username : target, 
                lastSeen: p ? p.lastSeen : null, 
                photo: p ? p.pfp : "", 
                nick: p ? p.nickname : "", 
                bio: p ? p.bio : "No bio yet." 
            }); 
        } 

        case 'saveUserProfile': { 
            const [nickname, pfp, bio] = args; 
            const profileIdx = ensureUser(username); 
            userCache[profileIdx].nickname = nickname; 
            userCache[profileIdx].pfp = pfp; 
            userCache[profileIdx].bio = bio; 
            syncToDisk(); 
            Logger.event(`Profile updated by ${username}`); 
            return res.json(true); 
        } 

        default: 
            return res.json([]); 
    }
});

app.all('/api/universal/:collection', (req, res) => {
    const collection = req.params.collection;
    if (!/^[a-zA-Z0-9_-]+$/.test(collection)) return res.status(400).json({ error: "Invalid collection name." });
    
    const filePath = path.join(__dirname, 'data', `${collection}.json`);
    if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, JSON.stringify({}));
    
    try {
        let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        if (req.method === 'GET') {
            return res.json(data);
        } else if (req.method === 'POST' || req.method === 'PUT') {
            data = { ...data, ...req.body };
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            Logger.sys(`Universal API updated: ${collection}`);
            return res.json({ success: true, data });
        } else if (req.method === 'DELETE') {
            fs.writeFileSync(filePath, JSON.stringify({}));
            Logger.sys(`Universal API cleared: ${collection}`);
            return res.json({ success: true, message: "Collection cleared." });
        } else {
            return res.status(405).json({ error: "Method not allowed." });
        }
    } catch (err) {
        Logger.error(`Universal API Error on ${collection}: ${err}`);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'client', '404.html'));
});

const BOARDS_FILE = '/data/boards.json';// THis is not used rn
if (!fs.existsSync(BOARDS_FILE)) fs.writeFileSync(BOARDS_FILE, JSON.stringify([]));
let boardCache = JSON.parse(fs.readFileSync(BOARDS_FILE, 'utf8'));

const syncBoardsToDisk = () => {
    try {
        fs.writeFileSync(BOARDS_FILE, JSON.stringify(boardCache, null, 2));
    } catch (err) {
        Logger.error(`Critical Board Sync Error: ${err}`);
    }
};

async function startServer() { 
    const keyPath = path.join(__dirname, 'data', 'SSL_Key.pem');
const certPath = path.join(__dirname, 'data', 'SSL_Cert.pem');

    if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
        Logger.sys("No SSL certificates found. Generating self-signed certs in persistent storage...");
        const pems = await selfsigned.generate([{ name: 'commonName', value: 'localhost' }]);
        fs.writeFileSync(keyPath, pems.private);
        fs.writeFileSync(certPath, pems.cert);
    }

    const server = https.createServer({
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath)
    }, app);

    const io = new Server(server);

    const forceHighQualityAudioSDP = (sdp) => {
        if (!sdp || typeof sdp !== 'string') return sdp;
        
        let enhancedSdp = sdp.replace(/b=AS:\d+\r\n/g, "");
        enhancedSdp = enhancedSdp.replace(/a=mid:audio\r\n/g, "a=mid:audio\r\nb=AS:510\r\n");
        enhancedSdp = enhancedSdp.replace(
            /(a=fmtp:\d+\s+.*)/g, 
            "$1; stereo=1; sprop-stereo=1; maxaveragebitrate=510000; cbr=1; useinbandfec=1; dtx=0"
        );
        
        return enhancedSdp;
    };

    io.use((socket, next) => {
        const cookieStr = socket.request.headers.cookie || "";
        const match = cookieStr.match(new RegExp('(^| )cardinal_token=([^;]+)'));
        const token = match ? match[2] : null;

        if (token && activeSessions.has(token)) {
            socket.username = activeSessions.get(token).username;
        } else {
            socket.username = "Unknown";
        }
        next();
    });

    io.on('connection', (socket) => {
        let currentRoomId = null;

        // CALL CRAP THIS STUFF IS SO PICKY
        socket.on('join-call', (roomId) => { 
            if (activeCalls.has(roomId)) {
                socket.join(roomId);
                currentRoomId = roomId;
                const room = activeCalls.get(roomId);
                room.participants.add(socket.id);
                
                socket.to(roomId).emit('user-connected', {
                    socketId: socket.id,
                    username: socket.username
                });
            }
        });

        socket.on('offer', (data) => {
            if (data.offer && data.offer.sdp) data.offer.sdp = forceHighQualityAudioSDP(data.offer.sdp);
            io.to(data.to).emit('offer', { offer: data.offer, from: socket.id, username: socket.username });
        });

        socket.on('answer', (data) => {
            if (data.answer && data.answer.sdp) data.answer.sdp = forceHighQualityAudioSDP(data.answer.sdp);
            io.to(data.to).emit('answer', { answer: data.answer, from: socket.id });
        });

        socket.on('ice-candidate', (data) => {
            io.to(data.to).emit('ice-candidate', { candidate: data.candidate, from: socket.id });
        });

        socket.on('toggle-mic', (data) => {
            if (currentRoomId) {
                socket.to(currentRoomId).emit('mic-toggled', {
                    userId: socket.id,
                    isMuted: data.isMuted      
                });
            }
        });

        socket.on('disconnect', () => {
            if (typeof currentRoomId !== 'undefined' && currentRoomId && activeCalls.has(currentRoomId)) {
                const room = activeCalls.get(currentRoomId);
                room.participants.delete(socket.id);
                socket.to(currentRoomId).emit('user-disconnected', socket.id);
                
                if (room.participants.size === 0) {
                    activeCalls.delete(currentRoomId);
                }
            }
        });

    });;
    server.listen(config.port, () => {
        const interfaces = os.networkInterfaces();
        let localIp = 'localhost';
        
        for (const name of Object.keys(interfaces)) {
            for (const iface of interfaces[name]) {
                if (iface.family === 'IPv4' && !iface.internal) {
                    localIp = iface.address;
                    break;
                }
            }
        }

        Logger.sys(`CARDINAL BETA R0.1 | Port: ${config.port}`);
        Logger.sys(`----------------------------------------`);
        Logger.sys(`Admin Panel: https://${localIp}:${config.port}/admin`);
        Logger.sys(`Chat Room:   https://${localIp}:${config.port}/chat`);
        Logger.sys(`----------------------------------------`);
        Logger.sys(`DISCLAIMER: THIS IS A VERY EARLY BETA BUILD. EXPECT:

CONSTANT CHANGES: Features, UI layouts, and theme palettes may vanish or overhaul without notice as the CatTower project evolves.

BREAKING BUGS: Expect the Cardinal Bridge to occasionally drop packets, CSS animations to glitch on certain mobile browsers, and session tokens to expire at the worst possible times. 

Known bugs:

High Message counts slowing down sending - Fix: Have the admin clear the chat

Youtube links freeze the chat (Shorts do not seem to affect it) - Fix: Have the admin clear the chat`);
    });
}

startServer();