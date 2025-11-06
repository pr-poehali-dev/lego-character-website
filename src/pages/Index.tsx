import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  character: string;
  price: number;
  image: string;
  category: 'sonic' | 'mario' | 'pooh';
}

const products: Product[] = [
  { id: 1, name: 'Соник Классический', character: 'Соник', price: 2990, image: 'https://cdn.poehali.dev/projects/cb57fb02-19a5-492a-a8bc-6e41973050b9/files/3062e6a0-81e6-49bd-a4cd-8d01f8a76908.jpg', category: 'sonic' },
  { id: 2, name: 'Соник Супер', character: 'Соник', price: 3490, image: 'https://cdn.poehali.dev/projects/cb57fb02-19a5-492a-a8bc-6e41973050b9/files/3062e6a0-81e6-49bd-a4cd-8d01f8a76908.jpg', category: 'sonic' },
  { id: 3, name: 'Соник на базе', character: 'Соник', price: 4990, image: 'https://cdn.poehali.dev/projects/cb57fb02-19a5-492a-a8bc-6e41973050b9/files/3062e6a0-81e6-49bd-a4cd-8d01f8a76908.jpg', category: 'sonic' },
  { id: 4, name: 'Супер Марио', character: 'Марио', price: 2790, image: 'https://cdn.poehali.dev/projects/cb57fb02-19a5-492a-a8bc-6e41973050b9/files/ce95daae-4be7-47f9-a25a-232764ccaf01.jpg', category: 'mario' },
  { id: 5, name: 'Марио и Йоши', character: 'Марио', price: 3990, image: 'https://cdn.poehali.dev/projects/cb57fb02-19a5-492a-a8bc-6e41973050b9/files/ce95daae-4be7-47f9-a25a-232764ccaf01.jpg', category: 'mario' },
  { id: 6, name: 'Марио в замке', character: 'Марио', price: 5490, image: 'https://cdn.poehali.dev/projects/cb57fb02-19a5-492a-a8bc-6e41973050b9/files/ce95daae-4be7-47f9-a25a-232764ccaf01.jpg', category: 'mario' },
  { id: 7, name: 'Винни-Пух классик', character: 'Винни-Пух', price: 2490, image: 'https://cdn.poehali.dev/projects/cb57fb02-19a5-492a-a8bc-6e41973050b9/files/b1518442-d053-472f-b5db-b70c5aeea4a0.jpg', category: 'pooh' },
  { id: 8, name: 'Винни и друзья', character: 'Винни-Пух', price: 3790, image: 'https://cdn.poehali.dev/projects/cb57fb02-19a5-492a-a8bc-6e41973050b9/files/b1518442-d053-472f-b5db-b70c5aeea4a0.jpg', category: 'pooh' },
  { id: 9, name: 'Дом Винни-Пуха', character: 'Винни-Пух', price: 4790, image: 'https://cdn.poehali.dev/projects/cb57fb02-19a5-492a-a8bc-6e41973050b9/files/b1518442-d053-472f-b5db-b70c5aeea4a0.jpg', category: 'pooh' },
];

const reviews = [
  { id: 1, name: 'Алексей М.', rating: 5, text: 'Потрясающее качество! Соник выглядит точь-в-точь как в играх. Ребёнок в восторге!' },
  { id: 2, name: 'Мария К.', rating: 5, text: 'Купила Марио сыну на день рождения — он не выпускает из рук! Детали идеально подогнаны.' },
  { id: 3, name: 'Дмитрий П.', rating: 5, text: 'Винни-Пух просто милашка! Отличный подарок для всей семьи. Быстрая доставка.' },
];

export default function Index() {
  const [filter, setFilter] = useState<string>('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-float">
              <span className="text-2xl">🧱</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              LEGO Heroes
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Каталог</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20 -z-10" />
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Собери своих героев!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Эксклюзивные LEGO-модели легендарных персонажей: Соник, Марио и Винни-Пух
            </p>
            <Button onClick={() => scrollToSection('catalog')} size="lg" className="text-lg px-8 py-6 animate-scale-in">
              Смотреть коллекцию
              <Icon name="ChevronRight" className="ml-2" size={20} />
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:scale-105 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-3">⚡</div>
                <h3 className="font-bold text-xl mb-2">Быстрая доставка</h3>
                <p className="text-muted-foreground">По всей России за 2-5 дней</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all hover:scale-105 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-3">✨</div>
                <h3 className="font-bold text-xl mb-2">100% оригинал</h3>
                <p className="text-muted-foreground">Официальные лицензии</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent transition-all hover:scale-105 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-3">🎁</div>
                <h3 className="font-bold text-xl mb-2">Подарочная упаковка</h3>
                <p className="text-muted-foreground">Бесплатно к каждому заказу</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Наша коллекция
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button 
              onClick={() => setFilter('all')} 
              variant={filter === 'all' ? 'default' : 'outline'}
              className="rounded-full"
            >
              Все модели
            </Button>
            <Button 
              onClick={() => setFilter('sonic')} 
              variant={filter === 'sonic' ? 'default' : 'outline'}
              className="rounded-full"
            >
              💙 Соник
            </Button>
            <Button 
              onClick={() => setFilter('mario')} 
              variant={filter === 'mario' ? 'default' : 'outline'}
              className="rounded-full"
            >
              ❤️ Марио
            </Button>
            <Button 
              onClick={() => setFilter('pooh')} 
              variant={filter === 'pooh' ? 'default' : 'outline'}
              className="rounded-full"
            >
              💛 Винни-Пух
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-64 bg-gradient-to-br from-muted to-background overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-gradient-to-r from-primary to-secondary text-white">
                    {product.character}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Отзывы наших клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={review.id} className="border-2 hover:border-primary transition-all hover:shadow-xl animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-muted-foreground mb-10 text-lg">
            Есть вопросы? Напишите нам, и мы ответим в течение 24 часов!
          </p>
          <Card className="shadow-2xl border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="example@mail.ru" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, чем мы можем помочь..." 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">🧱</span>
            <span className="text-2xl font-bold">LEGO Heroes</span>
          </div>
          <p className="text-muted mb-6">Коллекционные модели любимых персонажей</p>
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
            <Icon name="Youtube" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
            <Icon name="Mail" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
          </div>
          <p className="text-sm text-muted">© 2024 LEGO Heroes. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
