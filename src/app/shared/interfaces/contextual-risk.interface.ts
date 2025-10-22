export interface ContextualRisk {
  id: string;
  name: string;
  description?: string;
  source: 'network' | 'endpoint' | 'user' | 'application' | 'third-party' | string;
  affectedAssetIds: string[];
  severity: 'low' | 'medium' | 'high' | 'critical';
  score?: number;
  firstObserved?: string;
  lastObserved?: string;
  confidence?: number;
  mitigations?: string[];
  tags?: string[];
  status?: 'open' | 'investigating' | 'mitigated' | 'closed';
}
