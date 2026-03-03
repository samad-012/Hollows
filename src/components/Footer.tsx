export default function Footer() {
  return (
    <footer className="border-t mt-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-xl font-bold mb-4">HOLLOWS</h3>
          <p className="text-muted-foreground">
            Truth. Clarity. Confidence.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>Relationship Investigation</li>
            <li>Pre-Marriage Verification</li>
            <li>Corporate Investigation</li>
            <li>Cyber Investigation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Confidential Contact</h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>Email: kashifmohammed473@gmail.com</li>
            <li>Phone:+91 +91 8712571184</li>
            <li>Available: 24/7 Confidential Support</li>
          </ul>
        </div>

      </div>

      <div className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} HOLLOWS. All rights reserved.
      </div>
    </footer>
  );
}