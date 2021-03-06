// EN: Common interface for all components.
// 
// RU: Общий интерфейс компонентов.
interface Graphic is
    method move(x, y)
    method draw()

// EN: Simple component.
// 
// RU: Простой компонент.
class Dot implements Graphic is
    field x, y

    constructor Circle(x, y) { ... }

    method move(x, y) is
        this.x += x, this.y += y

    method draw() is
        Draw a dot at X and Y.

// EN: Components could extend other components.
// 
// RU: Компоненты могут расширять другие компоненты.
class Circle extends Dot is
    field radius

    constructor Circle(x, y, radius) { ... }

    method move(x, y) is
        this.x = x, this.y = y

    method draw() is
        Draw a circle at X and Y and radius R.

// EN: The composite component includes methods to add/remove child components.
// It tries to delegates to its children all operations defined in the
// component interface.
// 
// RU: Контейнер содержит операции добавления/удаления дочерних компонентов. Все
// стандартные операции интерфейса компонентов он делегирует каждому из
// дочерних компонент.
class CompoundGraphic implements Graphic is
    field children: array of Graphic

    method add(child: Graphic) is
        Add child to children array.

    method remove(child: Graphic) is
        Remove child to children array.

    method move(x, y) is
        For each child: child.move(x, y)

    method draw() is
        Go over all children and calculate bounding rectangle.
        Draw a dotted box using calculated values.
        Draw each child.


// EN: Application can operate with specific components or whole groups.
// 
// RU: Приложение работает как с единичными компонентами, так и целыми группами.
class ImageEditor is
    method load() is
        all = new CompoundGraphic()
        all.add(new Dot(1, 2))
        all.add(new Circle(5, 3, 10))
        // EN: ...
        // 
        // RU: ...

    method groupSelected(components: array of Graphic) is
        group = new CompoundGraphic()
        group.add(components)
        all.remove(components)
        all.add(group)
        // EN: All components will be drawn.
        // 
        // RU: Все компоненты будут отрисованы.
        all.draw()
