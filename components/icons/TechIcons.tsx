// Iconos animados de tecnologías

import {
  Code2,
  Database,
  Cloud,
  MessageSquare,
  Cpu,
  CheckCircle,
} from "lucide-react";

export const TechIcon = ({
  tech,
  className = "",
}: {
  tech: string;
  className?: string;
}) => {
  const iconMap: {
    [key: string]: React.ComponentType<{ size?: number; className?: string }>;
  } = {
    // Lenguajes
    Python: Code2,
    Ruby: Code2,
    "C#": Code2,
    Java: Code2,
    Go: Code2,
    JavaScript: Code2,
    TypeScript: Code2,

    // Bases de Datos
    PostgreSQL: Database,
    MongoDB: Database,
    Redis: Database,

    // Cloud & DevOps
    AWS: Cloud,
    GCP: Cloud,
    Docker: Cloud,
    Kubernetes: Cloud,
    "CI/CD": Cloud,

    // Mensajería
    Kafka: MessageSquare,
    RabbitMQ: MessageSquare,
    SQS: MessageSquare,

    // Sistemas
    "Sistemas Distribuidos": Cpu,
    "Arquitectura Orientada a Eventos": Cpu,
    "Diseño Orientado a Servicios": Cpu,

    // Testing
    "Testing Unitario e Integración": CheckCircle,
    Mocks: CheckCircle,
    "Testing de Carga (JMeter)": CheckCircle,
  };

  const IconComponent = iconMap[tech] || Code2;

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <IconComponent size={16} className="text-green-400 animate-pulse" />
    </div>
  );
};
