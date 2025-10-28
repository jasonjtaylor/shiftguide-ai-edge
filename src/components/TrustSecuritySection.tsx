import { Shield, Lock, Users } from "lucide-react";

const TrustSecuritySection = () => {
  const features = [
    {
      icon: Shield,
      title: "Private by default",
      description: "no data sold"
    },
    {
      icon: Lock,
      title: "Region-based hosting",
      description: "on request"
    },
    {
      icon: Users,
      title: "SSO/SAML available",
      description: "for enterprise pilots"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Trust & security
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSecuritySection;
