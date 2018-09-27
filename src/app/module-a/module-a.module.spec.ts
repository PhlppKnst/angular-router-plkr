import { ModuleAModule } from './module-a.module';

describe('ModuleAModule', () => {
  let moduleAModule: ModuleAModule;

  beforeEach(() => {
    moduleAModule = new ModuleAModule();
  });

  it('should create an instance', () => {
    expect(moduleAModule).toBeTruthy();
  });
});
