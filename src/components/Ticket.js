import React from 'react';
import QRCode from 'qrcode.react';
import styles from './Ticket.pcss';
import TicketInfo from './TicketInfo';


export default function Ticket({event, ticket, sendSms}) {

    const stylez = {
        'backgroundImage': `url(https://www.finnkino.fi${ticket.img})`
    };

    return (
        <section className={styles.root}>

            <TicketInfo event={event} ticket={ticket} />

            <div className={styles.qrContainer}>
                <QRCode value={ticket.id} size={300} />
            </div>

            <div className={styles.toilet} style={stylez}>

            </div>

        </section>
    );

}
