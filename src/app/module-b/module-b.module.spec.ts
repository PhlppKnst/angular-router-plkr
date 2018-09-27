import { ModuleBModule } from './module-b.module';

describe('ModuleBModule', () => {
  let moduleBModule: ModuleBModule;

  beforeEach(() => {
    moduleBModule = new ModuleBModule();
  });

  it('should create an instance', () => {
    expect(moduleBModule).toBeTruthy();
  });
});
