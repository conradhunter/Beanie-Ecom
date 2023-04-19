import React from 'react';

function TermsOfService() {
  return (
    <main className='row py-20 w-1/2'>
      <h1 className='text-2xl text-center mb-6'>
        Shipping & Returns Policy for "トーク"
      </h1>
      <p className='mb-6'>
        Thank you for shopping at "トーク", an e-commerce store specializing in
        beanies/hats. Please read the following shipping and returns policy
        carefully before making a purchase.
      </p>
      <section className='mb-6'>
        <h4 className='text-lg mb-2 font-medium'>Shipping</h4>
        <ol className='list-decimal'>
          <li>We currently offer shipping within Australia only.</li>
          <li>
            Orders are typically processed within 1-2 business days after
            payment has been received.
          </li>
          <li>
            We offer standard shipping via reputable carriers, and the estimated
            delivery time may vary depending on the shipping address.
          </li>
          <li>
            Shipping fees will be calculated at checkout based on the
            destination and weight of the package.
          </li>
          <li>
            "トーク" is not responsible for any delays in shipping due to
            unforeseen circumstances such as weather conditions, natural
            disasters, or carrier delays.
          </li>
        </ol>
      </section>

      <section className='mb-6'>
        <h4 className='text-lg mb-2 font-medium'>Returns</h4>
        <ol className='list-decimal'>
          <li>
            We strive to provide high-quality products, but if you are not
            satisfied with your purchase, we accept returns within 14 days from
            the date of delivery.
          </li>
          <li>
            To be eligible for a return, the item must be unused, in the same
            condition as when you received it, and in its original packaging.
          </li>
          <li>
            To initiate a return, please contact our customer service team at
            &#91;insert contact information&#93; with your order number and
            reason for the return.
          </li>
          <li>
            Upon approval, you will be provided with a return authorization and
            instructions on how to return the item.
          </li>
          <li>
            Customers are responsible for return shipping fees, unless the item
            received was damaged, defective, or incorrect.
          </li>
          <li>
            Refunds will be processed within 5-7 business days after we receive
            the returned item, and will be issued in the original form of
            payment.
          </li>
        </ol>
      </section>

      <section className='mb-6'>
        <h4 className='text-lg mb-2 font-medium'>Exchanges</h4>
        <ol className='list-decimal'>
          <li>
            We currently do not offer direct exchanges. If you wish to exchange
            an item, please follow the return process as outlined above, and
            place a new order for the desired item.
          </li>
        </ol>
      </section>

      <section className='mb-6'>
        <h4 className='text-lg mb-2 font-medium'>
          Damaged or Defective Items:
        </h4>
        <ol className='list-decimal'>
          <li>
            If you receive a damaged, defective, or incorrect item, please
            contact our customer service team at &#91;insert contact
            information&#93; within 48 hours of receiving the item.
          </li>
          <li>
            We may request photos or other evidence of the damaged or defective
            item for verification purposes.
          </li>
          <li>
            We will work with you to resolve the issue and may offer a refund or
            replacement, depending on the circumstances.
          </li>
        </ol>
      </section>

      <section className='mb-6'>
        <h4 className='text-lg mb-2 font-medium'>Please note:</h4>
        <ul className='list-disc'>
          <li>
            "トーク" reserves the right to refuse returns or exchanges that do
            not comply with our policy.
          </li>
          <li>
            Customized or personalized items are not eligible for return or
            exchange unless they are damaged, defective, or incorrect.
          </li>
          <li>
            "トーク" is not responsible for any lost or stolen packages during
            shipping.
          </li>
        </ul>
        <p>
          We hope you enjoy your purchase from "トーク". If you have any
          questions or concerns, please do not hesitate to contact our customer
          service team at &#91;insert contact information&#93;. Thank you for
          shopping with us!
        </p>
      </section>
    </main>
  );
}

export default TermsOfService;
