interface AuditCardProps {
  title: string;
  content: string;
}

export default function AuditCard({
  title,
  content,
}: AuditCardProps) {
  return (
    <div className="border border-gray-800 rounded-2xl p-6 bg-black">
      <h3 className="text-xl font-semibold text-white mb-4">
        {title}
      </h3>

      <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
        {content}
      </p>
    </div>
  );
}