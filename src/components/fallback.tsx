import type { FallbackProps } from "react-error-boundary";

export function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold text-green-700 mb-4">Algo deu errado</h2>
      <p className="text-sm text-gray-500 mb-6">{error.message}</p>

      <button
        onClick={resetErrorBoundary}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm"
      >
        Tentar novamente
      </button>
    </div>
  );
}