export default function OrderCompletedPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-center space-y-4">
      <p className="uppercase tracking-[0.25em] text-xs text-brand-gold">
        Thank you
      </p>
      <h1 className="text-3xl md:text-4xl font-serif text-brand-purple">
        Your order is complete.
      </h1>
      <p className="text-brand-purple/80 text-sm max-w-md mx-auto">
        A confirmation email will be sent with your order details. Your chosen
        color is now part of your daily ritual.
      </p>
    </main>
  );
}
