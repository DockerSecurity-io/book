import { IReporterService, ObserveReport } from '../types';
import { register, Histogram } from 'prom-client';

export class PrometheusReporterService implements IReporterService {
  report: Histogram<'route' | 'status'>;

  constructor() {
    this.report = new Histogram({
      name: 'main_backend_latency_ms',
      help: 'Duration of HTTP requests to the main backend in milliseconds',
      labelNames: ['route', 'status'],
      buckets: [5, 15, 50, 100, 200, 300, 400, 500, 2500, 5000, 10000],
    });
  }

  public storeReport(route: string, report: ObserveReport): void {
    this.report.labels(route, report.statusCode.toString()).observe(report.latency);
  }

  public getMetrics(): Promise<string> {
    return register.metrics();
  }
}