
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Info, AlertCircle, Check, X } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const DesignSystem = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Faverton Design System</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive guide to UI components, typography, colors, and layouts
            </p>
          </div>

          <Tabs defaultValue="components" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="colors">Colors</TabsTrigger>
              <TabsTrigger value="layouts">Layouts & Grid</TabsTrigger>
            </TabsList>
            
            {/* Components Tab */}
            <TabsContent value="components" className="space-y-16">
              {/* Buttons Section */}
              <section id="buttons" className="space-y-6">
                <h2 className="text-3xl font-bold border-b pb-2">Buttons</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Button Variants</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Button Sizes</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon"><Info className="h-4 w-4" /></Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Button States</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button disabled>Disabled</Button>
                    <Button className="cursor-wait">Loading</Button>
                  </div>
                </div>
              </section>

              {/* Form Elements Section */}
              <section id="form-elements" className="space-y-6">
                <h2 className="text-3xl font-bold border-b pb-2">Form Elements</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Text Input</h3>
                    <div className="space-y-2">
                      <Label htmlFor="default-input">Default Input</Label>
                      <Input id="default-input" placeholder="Enter text here" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="disabled-input">Disabled Input</Label>
                      <Input id="disabled-input" placeholder="Disabled" disabled />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Textarea</h3>
                    <div className="space-y-2">
                      <Label htmlFor="default-textarea">Default Textarea</Label>
                      <Textarea id="default-textarea" placeholder="Enter longer text here" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="disabled-textarea">Disabled Textarea</Label>
                      <Textarea id="disabled-textarea" placeholder="Disabled" disabled />
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Radio Group</h3>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Switch</h3>
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" />
                      <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="wifi" defaultChecked />
                      <Label htmlFor="wifi">Wi-Fi (On)</Label>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cards Section */}
              <section id="cards" className="space-y-6">
                <h2 className="text-3xl font-bold border-b pb-2">Cards</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Default Card</CardTitle>
                      <CardDescription>Card Description Here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Card content goes here. This is a simple card with a header and content.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-3d-hover">
                    <CardHeader>
                      <CardTitle>Interactive Card</CardTitle>
                      <CardDescription>With 3D hover effect</CardDescription>
                    </CardHeader>
                    <CardContent className="card-content-3d">
                      <p>This card has a subtle 3D hover effect. Move your cursor over it to see.</p>
                    </CardContent>
                    <CardFooter className="card-content-3d">
                      <Button className="w-full">Action Button</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-faverton-green/5 rounded-t-lg">
                      <Badge className="w-fit mb-2">Featured</Badge>
                      <CardTitle>Card with Footer</CardTitle>
                      <CardDescription>Card with buttons in footer</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p>This card has some actions in the footer that you can interact with.</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="ghost">Cancel</Button>
                      <Button>Submit</Button>
                    </CardFooter>
                  </Card>
                </div>
              </section>

              {/* Feedback Elements */}
              <section id="feedback" className="space-y-6">
                <h2 className="text-3xl font-bold border-b pb-2">Feedback Elements</h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Alerts</h3>
                  <div className="space-y-4">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Information</AlertTitle>
                      <AlertDescription>
                        This is an informational alert that provides neutral information.
                      </AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        This is an error alert that indicates something went wrong.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Progress</h3>
                  <Progress value={progress} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </div>
              </section>

              {/* Disclosure Elements */}
              <section id="disclosure" className="space-y-6">
                <h2 className="text-3xl font-bold border-b pb-2">Disclosure Elements</h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Accordion</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>First Accordion Item</AccordionTrigger>
                      <AccordionContent>
                        This is the accordion content. It can contain any elements including text, images or other components.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Second Accordion Item</AccordionTrigger>
                      <AccordionContent>
                        The accordion will animate open and closed when triggered. This helps create a smooth user experience.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Third Accordion Item</AccordionTrigger>
                      <AccordionContent>
                        You can use accordions to hide content that isn't immediately necessary, saving space on the page.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>

              {/* Table */}
              <section id="tables" className="space-y-6">
                <h2 className="text-3xl font-bold border-b pb-2">Tables</h2>
                <Table>
                  <TableCaption>A list of users.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Jean Dupont</TableCell>
                      <TableCell>jean.dupont@example.com</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                          Active
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <span className="sr-only">Edit</span>
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Marie Martin</TableCell>
                      <TableCell>marie.martin@example.com</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-orange-500"></span>
                          Pending
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <span className="sr-only">Edit</span>
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Pierre Durand</TableCell>
                      <TableCell>pierre.durand@example.com</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-gray-300"></span>
                          Inactive
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <span className="sr-only">Edit</span>
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </section>
            </TabsContent>
            
            {/* Typography Tab */}
            <TabsContent value="typography" className="space-y-16">
              <section id="typography" className="space-y-6">
                <h2 className="text-3xl font-bold border-b pb-2">Typography</h2>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Headings</h3>
                    <div className="space-y-4 border-l-4 border-faverton-green pl-4">
                      <h1 className="text-4xl font-bold">Heading 1 (text-4xl)</h1>
                      <h2 className="text-3xl font-bold">Heading 2 (text-3xl)</h2>
                      <h3 className="text-2xl font-bold">Heading 3 (text-2xl)</h3>
                      <h4 className="text-xl font-semibold">Heading 4 (text-xl)</h4>
                      <h5 className="text-lg font-semibold">Heading 5 (text-lg)</h5>
                      <h6 className="text-base font-semibold">Heading 6 (text-base)</h6>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Body Text</h3>
                    <div className="space-y-4 border-l-4 border-faverton-green pl-4">
                      <p className="text-lg">Large Paragraph (text-lg): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et est massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
                      <p className="text-base">Default Paragraph (text-base): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod mauris vel metus efficitur, nec tincidunt nisi tincidunt. Duis viverra justo vitae nisl pharetra, non tempor justo efficitur.</p>
                      <p className="text-sm">Small Paragraph (text-sm): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat, velit in tincidunt venenatis, justo tortor luctus ipsum, non sodales magna mi eget ex.</p>
                      <p className="text-xs">Extra Small (text-xs): Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Text Styles</h3>
                    <div className="space-y-4 border-l-4 border-faverton-green pl-4">
                      <p className="font-bold">Bold Text (font-bold)</p>
                      <p className="font-semibold">Semi-Bold Text (font-semibold)</p>
                      <p className="font-medium">Medium Text (font-medium)</p>
                      <p className="font-normal">Normal Text (font-normal)</p>
                      <p className="font-light">Light Text (font-light)</p>
                      <p className="italic">Italic Text (italic)</p>
                      <p className="underline">Underlined Text (underline)</p>
                      <p className="line-through">Strikethrough Text (line-through)</p>
                      <p className="uppercase">Uppercase Text (uppercase)</p>
                      <p className="capitalize">capitalized text (capitalize)</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Special Text Elements</h3>
                    <div className="space-y-6 border-l-4 border-faverton-green pl-4">
                      <blockquote className="border-l-4 border-faverton-wood pl-4 italic">
                        "This is a blockquote. It can be used to highlight important quotes or testimonials in your content."
                        <footer className="text-right mt-2 text-sm text-muted-foreground">— Someone Famous</footer>
                      </blockquote>
                      
                      <div>
                        <h4 className="text-lg font-medium mb-2">Unordered List</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>First item in the list</li>
                          <li>Second item in the list</li>
                          <li>Third item with a longer description that might wrap to the next line if the content is extensive</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium mb-2">Ordered List</h4>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>First step in the process</li>
                          <li>Second step in the process</li>
                          <li>Third and final step that completes the process</li>
                        </ol>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium mb-2">Definition List</h4>
                        <dl className="space-y-2">
                          <div>
                            <dt className="font-semibold">Term 1</dt>
                            <dd className="pl-4">Definition for the first term</dd>
                          </div>
                          <div>
                            <dt className="font-semibold">Term 2</dt>
                            <dd className="pl-4">Definition for the second term</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </TabsContent>
            
            {/* Colors Tab */}
            <TabsContent value="colors" className="space-y-16">
              <section id="colors" className="space-y-6">
                <h2 className="text-3xl font-bold border-b pb-2">Color System</h2>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Brand Colors</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="h-24 bg-faverton-green rounded-md flex items-end p-2">
                          <span className="text-white font-medium">Green (Primary)</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>faverton-green</span>
                          <span className="font-mono">#78A046</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-24 bg-faverton-green-light rounded-md flex items-end p-2">
                          <span className="font-medium">Green Light</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>faverton-green-light</span>
                          <span className="font-mono">#DEF2C8</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-24 bg-faverton-green-dark rounded-md flex items-end p-2">
                          <span className="text-white font-medium">Green Dark</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>faverton-green-dark</span>
                          <span className="font-mono">#3E5F1C</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-24 bg-faverton-earth rounded-md flex items-end p-2">
                          <span className="text-white font-medium">Earth</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>faverton-earth</span>
                          <span className="font-mono">#C7A97B</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-24 bg-faverton-earth-light rounded-md flex items-end p-2">
                          <span className="font-medium">Earth Light</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>faverton-earth-light</span>
                          <span className="font-mono">#E6D2B5</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-24 bg-faverton-earth-dark rounded-md flex items-end p-2">
                          <span className="text-white font-medium">Earth Dark</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>faverton-earth-dark</span>
                          <span className="font-mono">#8B6F4E</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-24 bg-faverton-wood rounded-md flex items-end p-2">
                          <span className="font-medium">Wood</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>faverton-wood</span>
                          <span className="font-mono">#D4C4A8</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-24 bg-faverton-wood-light rounded-md flex items-end p-2">
                          <span className="font-medium">Wood Light</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>faverton-wood-light</span>
                          <span className="font-mono">#F2E9DE</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-24 bg-faverton-wood-dark rounded-md flex items-end p-2">
                          <span className="text-white font-medium">Wood Dark</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>faverton-wood-dark</span>
                          <span className="font-mono">#A69276</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">UI Colors</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <div className="h-16 bg-background border rounded-md flex items-end p-2">
                          <span className="font-medium">Background</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 bg-foreground rounded-md flex items-end p-2">
                          <span className="text-white font-medium">Foreground</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 bg-muted rounded-md flex items-end p-2">
                          <span className="font-medium">Muted</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 bg-muted-foreground rounded-md flex items-end p-2">
                          <span className="text-white font-medium">Muted Foreground</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 bg-primary rounded-md flex items-end p-2">
                          <span className="text-primary-foreground font-medium">Primary</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 bg-primary-foreground border rounded-md flex items-end p-2">
                          <span className="font-medium">Primary Foreground</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 bg-secondary rounded-md flex items-end p-2">
                          <span className="text-secondary-foreground font-medium">Secondary</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 bg-secondary-foreground rounded-md flex items-end p-2">
                          <span className="text-white font-medium">Secondary Foreground</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 bg-accent rounded-md flex items-end p-2">
                          <span className="font-medium">Accent</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 bg-accent-foreground rounded-md flex items-end p-2">
                          <span className="text-white font-medium">Accent Foreground</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 bg-destructive rounded-md flex items-end p-2">
                          <span className="text-destructive-foreground font-medium">Destructive</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 bg-border rounded-md flex items-end p-2">
                          <span className="font-medium">Border</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </TabsContent>
            
            {/* Layouts Tab */}
            <TabsContent value="layouts" className="space-y-16">
              <section id="grid-system" className="space-y-6">
                <h2 className="text-3xl font-bold border-b pb-2">Grid System</h2>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">12-Column Grid</h3>
                    <p>Tailwind's grid system is used to create responsive layouts with a 12-column structure.</p>
                    <div className="grid grid-cols-12 gap-2 text-center text-sm font-medium">
                      {Array.from({length: 12}).map((_, i) => (
                        <div key={i} className="bg-muted p-2 rounded">
                          {i+1}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Grid Examples</h3>
                    
                    <div>
                      <h4 className="text-lg mb-2">Full-width Column</h4>
                      <div className="grid grid-cols-12 gap-4 mb-6">
                        <div className="col-span-12 bg-faverton-green-light p-4 rounded">col-span-12</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg mb-2">Two Equal Columns</h4>
                      <div className="grid grid-cols-12 gap-4 mb-6">
                        <div className="col-span-6 bg-faverton-green-light p-4 rounded">col-span-6</div>
                        <div className="col-span-6 bg-faverton-earth-light p-4 rounded">col-span-6</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg mb-2">Three Equal Columns</h4>
                      <div className="grid grid-cols-12 gap-4 mb-6">
                        <div className="col-span-4 bg-faverton-green-light p-4 rounded">col-span-4</div>
                        <div className="col-span-4 bg-faverton-earth-light p-4 rounded">col-span-4</div>
                        <div className="col-span-4 bg-faverton-wood-light p-4 rounded">col-span-4</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg mb-2">Four Equal Columns</h4>
                      <div className="grid grid-cols-12 gap-4 mb-6">
                        <div className="col-span-3 bg-faverton-green-light p-4 rounded">col-span-3</div>
                        <div className="col-span-3 bg-faverton-earth-light p-4 rounded">col-span-3</div>
                        <div className="col-span-3 bg-faverton-wood-light p-4 rounded">col-span-3</div>
                        <div className="col-span-3 bg-faverton-green-light p-4 rounded">col-span-3</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg mb-2">Mixed Column Widths</h4>
                      <div className="grid grid-cols-12 gap-4 mb-6">
                        <div className="col-span-8 bg-faverton-green-light p-4 rounded">col-span-8</div>
                        <div className="col-span-4 bg-faverton-earth-light p-4 rounded">col-span-4</div>
                      </div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4 bg-faverton-wood-light p-4 rounded">col-span-4</div>
                        <div className="col-span-4 bg-faverton-green-light p-4 rounded">col-span-4</div>
                        <div className="col-span-4 bg-faverton-earth-light p-4 rounded">col-span-4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <section id="responsive-behavior" className="space-y-6">
                <h2 className="text-3xl font-bold border-b pb-2">Responsive Behavior</h2>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Breakpoints</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Breakpoint</TableHead>
                            <TableHead>CSS Media Query</TableHead>
                            <TableHead>Tailwind Class Prefix</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Mobile</TableCell>
                            <TableCell>Default (≤ 480px)</TableCell>
                            <TableCell>(none)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Small</TableCell>
                            <TableCell>@media (min-width: 481px)</TableCell>
                            <TableCell>sm:</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Medium</TableCell>
                            <TableCell>@media (min-width: 768px)</TableCell>
                            <TableCell>md:</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Large</TableCell>
                            <TableCell>@media (min-width: 1024px)</TableCell>
                            <TableCell>lg:</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Extra Large</TableCell>
                            <TableCell>@media (min-width: 1280px)</TableCell>
                            <TableCell>xl:</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">2X Large</TableCell>
                            <TableCell>@media (min-width: 1440px)</TableCell>
                            <TableCell>2xl:</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Responsive Example</h3>
                    <p>Resize browser to see how columns adjust at different breakpoints:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      <div className="bg-faverton-green-light p-4 rounded flex items-center justify-center">
                        <div className="text-center">
                          <div className="block sm:hidden">Mobile: 1 column</div>
                          <div className="hidden sm:block md:hidden">SM: 2 columns</div>
                          <div className="hidden md:block lg:hidden">MD: 3 columns</div>
                          <div className="hidden lg:block">LG+: 4 columns</div>
                        </div>
                      </div>
                      <div className="bg-faverton-earth-light p-4 rounded">Column 2</div>
                      <div className="bg-faverton-wood-light p-4 rounded">Column 3</div>
                      <div className="bg-faverton-green-light p-4 rounded">Column 4</div>
                    </div>
                  </div>
                </div>
              </section>
              
              <section id="spacing" className="space-y-6">
                <h2 className="text-3xl font-bold border-b pb-2">Spacing System</h2>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Margins & Padding</h3>
                    <p>Our spacing system uses Tailwind's default spacing scale, which provides consistent increments:</p>
                    
                    <div className="space-y-4 mt-6">
                      <div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">4px</div>
                          <div className="h-6 w-1 bg-faverton-green"></div>
                          <div className="ml-2 text-sm text-muted-foreground">p-1, m-1</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">8px</div>
                          <div className="h-6 w-2 bg-faverton-green"></div>
                          <div className="ml-2 text-sm text-muted-foreground">p-2, m-2</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">12px</div>
                          <div className="h-6 w-3 bg-faverton-green"></div>
                          <div className="ml-2 text-sm text-muted-foreground">p-3, m-3</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">16px</div>
                          <div className="h-6 w-4 bg-faverton-green"></div>
                          <div className="ml-2 text-sm text-muted-foreground">p-4, m-4</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">24px</div>
                          <div className="h-6 w-6 bg-faverton-green"></div>
                          <div className="ml-2 text-sm text-muted-foreground">p-6, m-6</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">32px</div>
                          <div className="h-6 w-8 bg-faverton-green"></div>
                          <div className="ml-2 text-sm text-muted-foreground">p-8, m-8</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">48px</div>
                          <div className="h-6 w-12 bg-faverton-green"></div>
                          <div className="ml-2 text-sm text-muted-foreground">p-12, m-12</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <section id="animations" className="space-y-6">
                <h2 className="text-3xl font-bold border-b pb-2">Animation System</h2>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Animation Classes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg mb-3">Fade In</h4>
                        <div className="bg-muted rounded-md p-6 flex justify-center">
                          <div className="animate-fade-in bg-card shadow-sm border p-4 rounded-md w-40 h-24 flex items-center justify-center">
                            animate-fade-in
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg mb-3">Fade In Left</h4>
                        <div className="bg-muted rounded-md p-6 flex justify-center">
                          <div className="animate-fade-in-left bg-card shadow-sm border p-4 rounded-md w-40 h-24 flex items-center justify-center">
                            animate-fade-in-left
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg mb-3">Float Slow</h4>
                        <div className="bg-muted rounded-md p-6 flex justify-center">
                          <div className="animate-float-slow bg-card shadow-sm border p-4 rounded-md w-40 h-24 flex items-center justify-center">
                            animate-float-slow
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg mb-3">Float Medium</h4>
                        <div className="bg-muted rounded-md p-6 flex justify-center">
                          <div className="animate-float-medium bg-card shadow-sm border p-4 rounded-md w-40 h-24 flex items-center justify-center">
                            animate-float-medium
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </TabsContent>

          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DesignSystem;
