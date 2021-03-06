class Singleton is
    private field instance: Singleton

    private method Singleton() is
        Some initialization code.

    static method getInstance() is
        if (this.instance == null) then
            acquireThreadLock() and then
                if (this.instance == null) then
                    this.instance = new Singleton()
        return this.instance

class Application is
    method main() is
        Singleton foo = Singleton.getInstance()
        Singleton bar = Singleton.getInstance()
        // EN: foo contains the same object as bar.
        // 
        // RU: В переменной foo содержится тот же объект, что и в bar
