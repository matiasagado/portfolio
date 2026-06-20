export default function Hardware(){

    const technologies = ['Linux', 'Tailscale', 'Docker', 'Pi-hole', 'NPM', 'Prometheus', 'Grafana', 'Loki', 'Ollama'];

    return(
        <section>
            <div>
                <p>infastructure</p>
                <p>hardware</p>
                <p>Self-hosted server infastructure purpose built for AI Model training<br/>
                and evaluation workflows.</p>
            </div>
            <div>
                <p>PRIVATE SERVER</p>
                <div>
                    <p>Custom Build</p>
                    <p>April 2026</p>
                </div>
                <p>
                A five-layer self-hosted infrastructure platform — user services, secure access, container orchestration, full observability, and an AI intelligence layer for automated log analysis and anomaly detection.
                </p>
                <ul>
                    {technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}