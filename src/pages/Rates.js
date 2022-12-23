
import React from 'react';

export default function Rates() {
  return (
    <div className="Rates">
      <h1>Our Rates</h1>
      <p>
        At <i>the Nanny Network</i>, we offer competitive rates for high-quality
        babysitting services. Our rates are based on the number of children, the
        length of the babysitting session, and any additional services
        requested.
      </p>
      <h2>Standard Rates:</h2>

      <ul>
        <li>$15 per hour for one child</li>
        <li>$20 per hour for two children</li>
        <li>$25 per hour for three or more children</li>
      </ul>

      <h2>Additional Services:</h2>

      <ul>
        <li>$5 per hour for each additional child over three </li>
        <li>$5 per hour for meal preparation</li>
        <li>
          $10 per hour for light housekeeping tasks (such as picking up toys or
          loading/unloading the dishwasher)
        </li>
      </ul>

      <h2>Discounts:</h2>

      <ul>
        <li>10% discount for booking 4 or more consecutive hours</li>

        <li>5% discount for booking 10 or more consecutive hours</li>
      </ul>

      <h2>Example:</h2>
      <p>
        If you have two children and would like the babysitter to stay for 4
        hours while also preparing meals and doing light housekeeping tasks, the
        total cost would be calculated as follows:
      </p>

      <ul>
        <li>Base rate for two children: </li>

        <li>
          $20 per hour Additional services: $5 per hour for meal preparation +
          $10 per hour for light housekeeping tasks = $15 per hour
        </li>

        <li>Total hourly rate: $20 + $15 = $35 per hour</li>

        <li>4-hour booking: $35 per hour x 4 hours = $140</li>

        <li>
          10% discount for booking 4 or more consecutive hours: $140 x 10% = $14
        </li>

        <li>Total cost: $140 - $14 = $126 </li>
      </ul>

      <p>Please note that these rates are subject to change. For the most current rates, please contact us at support@theNannyNetwork.com.</p>
    </div>
  );
}
