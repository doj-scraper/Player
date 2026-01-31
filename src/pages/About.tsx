import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-8 md:ml-64">
      <div className="max-w-3xl mx-auto border border-border bg-surface p-8">
        <h1 className="text-3xl font-bold text-primary mb-4">/extended_bio</h1>
        <p className="text-secondary font-mono text-sm">
          Long-form bio and credentials will live here. For now, reference the README section on the home
          page for a concise snapshot.
        </p>
      </div>
    </div>
  );
};

export default About;
