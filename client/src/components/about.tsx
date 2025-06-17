import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about technology, cybersecurity, and creating innovative solutions that make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="https://iili.io/FndI3IS.png" 
              alt="Professional developer workspace" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Software Engineering Student & Tech Enthusiast
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Currently pursuing my BSc (Hons) in Computer Systems & Software Engineering, I'm passionate about 
                developing robust software solutions and exploring the fascinating world of cybersecurity.
              </p>
              
              <p>
                Based in Molepolole, Botswana, I combine academic excellence with practical experience in 
                various programming languages and technologies. My goal is to contribute to innovative projects 
                that solve real-world problems while maintaining the highest security standards.
              </p>
              
              <p>
                When I'm not coding, you'll find me researching the latest cybersecurity trends, experimenting 
                with new technologies, or working on personal projects that challenge my skills and creativity.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="bg-gray-50 dark:bg-gray-800">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">BSc (Hons) Computer Systems & Software Engineering</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-gray-800">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Molepolole, Botswana</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
