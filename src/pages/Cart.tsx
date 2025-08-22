import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Golden Geometry",
      price: 299,
      originalPrice: 399,
      image: artwork1,
      quantity: 1,
      size: "24\" x 36\"",
      medium: "Acrylic on Canvas"
    },
    {
      id: 2,
      title: "Flowing Forms",
      price: 399,
      image: artwork2,
      quantity: 1,
      size: "30\" x 40\"",
      medium: "Mixed Media"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const savings = cartItems.reduce((sum, item) => {
    const itemSavings = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0;
    return sum + itemSavings;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center section-padding">
          <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like you haven't added any artwork to your cart yet. 
            Explore our collections to find pieces that speak to you.
          </p>
          <div className="space-y-4">
            <Link to="/shop">
              <Button size="lg" className="px-8">
                Continue Shopping
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground">
              <p>Check out these popular collections:</p>
              <div className="flex justify-center space-x-4 mt-2">
                <Link to="/shop" className="text-primary hover:underline">Original Paintings</Link>
                <Link to="/shop" className="text-primary hover:underline">Prints</Link>
                <Link to="/shop" className="text-primary hover:underline">Abstract Series</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
            </p>
          </div>
          <Link to="/shop">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Continue Shopping</span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {savings > 0 && (
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-500">Sale</Badge>
                    <span className="text-green-700 font-medium">
                      You're saving ${savings.toFixed(2)} with current promotions!
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex space-x-6">
                    <div className="w-32 h-32 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.medium}</p>
                        <p className="text-sm text-muted-foreground">{item.size}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-primary">${item.price}</span>
                        {item.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            ${item.originalPrice}
                          </span>
                        )}
                        {item.originalPrice && (
                          <Badge className="bg-destructive">
                            Save ${item.originalPrice - item.price}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-600" : ""}>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Savings</span>
                    <span>-${savings.toFixed(2)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                {subtotal < 500 && (
                  <div className="text-sm text-muted-foreground bg-primary/5 p-3 rounded">
                    Add ${(500 - subtotal).toFixed(2)} more for free shipping!
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Promo Code</h3>
                <div className="flex space-x-2">
                  <Input placeholder="Enter code" />
                  <Button variant="outline">Apply</Button>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
            
            <div className="text-center text-sm text-muted-foreground">
              <p>Secure checkout with SSL encryption</p>
              <p className="mt-2">30-day return policy • Worldwide shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;